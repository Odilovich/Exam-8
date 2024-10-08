"use client";
import ProductStore from "@/store/products";
import Container from "@/components/container";
import Image from "next/image";
import HomeIcon from "@/assets/icons/u_home-alt.svg";
import NextMini from "@/assets/icons/right-mini.svg";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { getDataFromCookie } from "@/utils/data-service";
import Notification from "@/utils/notification";
import { Avatar, Button } from "@mui/material";
import TextArea from "antd/es/input/TextArea";
import { ConfigProvider } from "antd";
import { LoadingOutlined, SendOutlined } from "@ant-design/icons";
const Index = () => {
  const [data, setData]: any = useState([]);
  const [cart, setCart] = useState(false);
  const [comments, setComments]: any = useState();
  const [productImages, setProductImages] = useState([]);
  const [loadingSent, setLoadingSent] = useState(false);
  const [handleComment, setHandleComment] = useState("");
  const { getProduct, cartProduct, getCommentsProduct, commentProduct } =
    ProductStore();
  const { id } = useParams();
  const token = getDataFromCookie("access_token");
  const [params, setParams] = useState({
    page: 1,
    limit: 3,
    id: id,
  });
  const handleCart = async () => {
    if (token) {
      setCart(!cart);
      const payload = {
        productId: id,
      };
      try {
        await cartProduct(payload);
      } catch (err) {
        console.log(err);
      }
    } else {
      Notification({
        type: "error",
        title: "Вы должны войти, чтобы добавить товар в корзину",
      });
    }
  };

  const product = async () => {
    try {
      const res = await getProduct(id);
      setData(res?.data);
      setProductImages(res?.data.image_url);
    } catch (err) {
      console.log("Error fetching product", err);
    }
  };
  useEffect(() => {
    product();
  }, []);
  useEffect(() => {
    if (data?.basket === true) {
      setCart(true);
    }
  }, [data]);
  const images = productImages?.map((item: any) => ({
    original: item,
    thumbnail: item,
  }));

  const getComments = async () => {
    const res: any = await getCommentsProduct(params);
    setComments(res?.data);
  };
  useEffect(() => {
    getComments();
  }, [params]);
  console.log(comments);

  const otherComments = () => {
    setParams((prevParams) => ({ ...prevParams, limit: 1000 }));
  };

  const closeComments = () => {
    setParams((prevParams) => ({ ...prevParams, limit: 3 }));
  };

  const createComment = async () => {
    const payload = {
      message: handleComment,
      productID: id,
    };
    if (handleComment.length > 0) {
      setLoadingSent(true);
      try {
        const res: any = await commentProduct(payload);
        if (res.status === 201) {
          getComments();
          setHandleComment("");
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingSent(false);
      }
    }
  };
  return (
    <section className="pt-[16px] pb-[80px] bg-[#F2F2F2]">
      <Container>
        <div className="text-gray-500 flex text-sm mb-[16px]">
          <Image src={HomeIcon} alt="img" className="mr-[3px]" />
          <a href="/" className="hover:underline mr-[3px]">
            Главная
          </a>{" "}
          <Image src={NextMini} className="mr-[3px]" alt="img" />{" "}
          <a href="/products" className="hover:underline mr-[3px]">
            Продукты
          </a>
          <Image src={NextMini} className="mr-[3px]" alt="img" />{" "}
          <p className="text-[#000]">{data?.product_name}</p>
        </div>
        <div className="flex items-start justify-between gap-6 mb-[80px]">
          <ReactImageGallery
            autoPlay={true}
            showPlayButton={false}
            showBullets
            showNav={false}
            items={images}
          />
          <div className="bg-[white] w-full max-w-[500px] p-[50px] rounded-lg">
            <h1 className="text-[32px] font-medium leading-[34px] mb-4">
              {data?.product_name}
            </h1>
            <p className="mb-5">{data?.description}</p>
            <div className="flex items-center gap-2">
              <span>В комлекте:</span>
              <p className="text-[20px] font-medium">{data?.count} шт.</p>
            </div>
            <div className="flex items-center gap-2 mb-[35px]">
              <span>Страна производства:</span>
              <p className="text-[20px] font-medium">{data?.made_in}</p>
            </div>
            <div className="mb-[35px] flex items-center gap-3">
              <div>
                <span className="text-[24px] font-medium mr-2">200 000</span>
                <span className="text-[#1f1d14c6]">UZS</span>
              </div>
              <p className="text-[20px] border-l border-l-black pl-2">1 шт.</p>
            </div>
            <div className="flex items-center gap-5">
              {cart === false ? (
                <button
                  onClick={handleCart}
                  className="w-[145px] py-[12px] bg-[#FBD029] rounded-md flex items-center justify-center gap-[5px]"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M14.333 10.5002C14.3315 10.1 14.21 9.70943 13.9842 9.37903C13.7584 9.04863 13.4387 8.79357 13.0663 8.64684L14.313 3.98017C14.3391 3.88078 14.3418 3.77672 14.321 3.67611C14.3001 3.5755 14.2564 3.48106 14.193 3.40017C14.1283 3.32437 14.0473 3.26406 13.9562 3.22368C13.865 3.1833 13.766 3.16388 13.6663 3.16684H4.53301L4.31301 2.32684C4.27476 2.18478 4.19059 2.05936 4.07362 1.97013C3.95666 1.88089 3.81346 1.83286 3.66634 1.8335H2.33301V3.16684H3.15301L4.80634 9.34017C4.84541 9.48561 4.93257 9.61354 5.05362 9.70312C5.17468 9.7927 5.3225 9.83866 5.47301 9.8335H12.333C12.5098 9.8335 12.6794 9.90374 12.8044 10.0288C12.9294 10.1538 12.9997 10.3234 12.9997 10.5002C12.9997 10.677 12.9294 10.8465 12.8044 10.9716C12.6794 11.0966 12.5098 11.1668 12.333 11.1668H3.66634C3.48953 11.1668 3.31996 11.2371 3.19494 11.3621C3.06991 11.4871 2.99967 11.6567 2.99967 11.8335C2.99967 12.0103 3.06991 12.1799 3.19494 12.3049C3.31996 12.4299 3.48953 12.5002 3.66634 12.5002H4.45301C4.34336 12.8023 4.30813 13.1263 4.35029 13.4449C4.39246 13.7635 4.51077 14.0672 4.69522 14.3304C4.87967 14.5936 5.12482 14.8084 5.40991 14.9567C5.695 15.1051 6.01164 15.1825 6.33301 15.1825C6.65438 15.1825 6.97101 15.1051 7.25611 14.9567C7.5412 14.8084 7.78635 14.5936 7.9708 14.3304C8.15524 14.0672 8.27356 13.7635 8.31572 13.4449C8.35788 13.1263 8.32265 12.8023 8.21301 12.5002H9.78634C9.68653 12.7752 9.6483 13.0689 9.67434 13.3603C9.70037 13.6518 9.79005 13.934 9.93704 14.187C10.084 14.44 10.2847 14.6577 10.525 14.8247C10.7653 14.9917 11.0393 15.1039 11.3277 15.1535C11.6161 15.203 11.9119 15.1887 12.1941 15.1115C12.4764 15.0343 12.7382 14.8961 12.9612 14.7066C13.1843 14.5172 13.363 14.2811 13.4848 14.015C13.6066 13.749 13.6686 13.4594 13.6663 13.1668C13.6651 12.8224 13.5731 12.4844 13.3997 12.1868C13.6848 12.0071 13.9198 11.7582 14.083 11.4634C14.2461 11.1685 14.3321 10.8372 14.333 10.5002ZM11.7263 8.50017H5.99967L4.89301 4.50017H12.7997L11.7263 8.50017ZM6.33301 13.8335C6.20115 13.8335 6.07226 13.7944 5.96263 13.7211C5.85299 13.6479 5.76755 13.5438 5.71709 13.422C5.66663 13.3001 5.65343 13.1661 5.67915 13.0368C5.70487 12.9075 5.76837 12.7887 5.8616 12.6954C5.95484 12.6022 6.07363 12.5387 6.20295 12.513C6.33227 12.4873 6.46631 12.5005 6.58813 12.5509C6.70995 12.6014 6.81407 12.6868 6.88732 12.7965C6.96058 12.9061 6.99967 13.035 6.99967 13.1668C6.99967 13.3436 6.92944 13.5132 6.80441 13.6382C6.67939 13.7633 6.50982 13.8335 6.33301 13.8335ZM11.6663 13.8335C11.5345 13.8335 11.4056 13.7944 11.296 13.7211C11.1863 13.6479 11.1009 13.5438 11.0504 13.422C11 13.3001 10.9868 13.1661 11.0125 13.0368C11.0382 12.9075 11.1017 12.7887 11.1949 12.6954C11.2882 12.6022 11.407 12.5387 11.5363 12.513C11.6656 12.4873 11.7996 12.5005 11.9215 12.5509C12.0433 12.6014 12.1474 12.6868 12.2207 12.7965C12.2939 12.9061 12.333 13.035 12.333 13.1668C12.333 13.3436 12.2628 13.5132 12.1377 13.6382C12.0127 13.7633 11.8432 13.8335 11.6663 13.8335Z"
                        fill="#1F1D14"
                      />
                    </svg>
                  </span>
                  <span>Корзина</span>
                </button>
              ) : (
                <button
                  onClick={handleCart}
                  className="w-[145px] py-[12px] bg-red-500 rounded-md flex items-center justify-center gap-[5px]"
                >
                  <RemoveShoppingCartOutlinedIcon />
                  <span>Удалить</span>
                </button>
              )}
              <button className="w-[145px] py-[12px] border-[#FBD029] border-2 rounded-md flex items-center justify-center gap-[5px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M13.333 5.9535V2.50016C13.333 2.32335 13.2627 2.15378 13.1377 2.02876C13.0127 1.90373 12.8431 1.8335 12.6663 1.8335C12.4895 1.8335 12.3199 1.90373 12.1949 2.02876C12.0699 2.15378 11.9996 2.32335 11.9996 2.50016V5.9535C11.6135 6.09363 11.2799 6.34925 11.0442 6.68561C10.8084 7.02196 10.682 7.42275 10.682 7.8335C10.682 8.24424 10.8084 8.64503 11.0442 8.98139C11.2799 9.31774 11.6135 9.57336 11.9996 9.7135V14.5002C11.9996 14.677 12.0699 14.8465 12.1949 14.9716C12.3199 15.0966 12.4895 15.1668 12.6663 15.1668C12.8431 15.1668 13.0127 15.0966 13.1377 14.9716C13.2627 14.8465 13.333 14.677 13.333 14.5002V9.7135C13.7191 9.57336 14.0526 9.31774 14.2884 8.98139C14.5241 8.64503 14.6506 8.24424 14.6506 7.8335C14.6506 7.42275 14.5241 7.02196 14.2884 6.68561C14.0526 6.34925 13.7191 6.09363 13.333 5.9535ZM12.6663 8.50016C12.5344 8.50016 12.4055 8.46106 12.2959 8.38781C12.1863 8.31456 12.1008 8.21044 12.0504 8.08862C11.9999 7.9668 11.9867 7.83276 12.0124 7.70344C12.0382 7.57412 12.1016 7.45533 12.1949 7.36209C12.2881 7.26886 12.4069 7.20536 12.5362 7.17964C12.6655 7.15392 12.7996 7.16712 12.9214 7.21758C13.0432 7.26803 13.1473 7.35348 13.2206 7.46312C13.2939 7.57275 13.333 7.70164 13.333 7.8335C13.333 8.01031 13.2627 8.17988 13.1377 8.3049C13.0127 8.42992 12.8431 8.50016 12.6663 8.50016ZM8.66628 9.9535V2.50016C8.66628 2.32335 8.59605 2.15378 8.47102 2.02876C8.346 1.90373 8.17643 1.8335 7.99962 1.8335C7.82281 1.8335 7.65324 1.90373 7.52821 2.02876C7.40319 2.15378 7.33295 2.32335 7.33295 2.50016V9.9535C6.94685 10.0936 6.61326 10.3492 6.37751 10.6856C6.14177 11.022 6.0153 11.4228 6.0153 11.8335C6.0153 12.2442 6.14177 12.645 6.37751 12.9814C6.61326 13.3177 6.94685 13.5734 7.33295 13.7135V14.5002C7.33295 14.677 7.40319 14.8465 7.52821 14.9716C7.65324 15.0966 7.82281 15.1668 7.99962 15.1668C8.17643 15.1668 8.346 15.0966 8.47102 14.9716C8.59605 14.8465 8.66628 14.677 8.66628 14.5002V13.7135C9.05239 13.5734 9.38598 13.3177 9.62172 12.9814C9.85747 12.645 9.98394 12.2442 9.98394 11.8335C9.98394 11.4228 9.85747 11.022 9.62172 10.6856C9.38598 10.3492 9.05239 10.0936 8.66628 9.9535ZM7.99962 12.5002C7.86776 12.5002 7.73887 12.4611 7.62924 12.3878C7.5196 12.3146 7.43416 12.2104 7.3837 12.0886C7.33324 11.9668 7.32004 11.8328 7.34576 11.7034C7.37148 11.5741 7.43498 11.4553 7.52821 11.3621C7.62145 11.2689 7.74024 11.2054 7.86956 11.1796C7.99888 11.1539 8.13292 11.1671 8.25474 11.2176C8.37656 11.268 8.48068 11.3535 8.55393 11.4631C8.62718 11.5727 8.66628 11.7016 8.66628 11.8335C8.66628 12.0103 8.59605 12.1799 8.47102 12.3049C8.346 12.4299 8.17643 12.5002 7.99962 12.5002ZM3.99962 4.62016V2.50016C3.99962 2.32335 3.92938 2.15378 3.80436 2.02876C3.67933 1.90373 3.50976 1.8335 3.33295 1.8335C3.15614 1.8335 2.98657 1.90373 2.86155 2.02876C2.73652 2.15378 2.66628 2.32335 2.66628 2.50016V4.62016C2.28018 4.7603 1.94659 5.01592 1.71084 5.35227C1.4751 5.68863 1.34863 6.08942 1.34863 6.50016C1.34863 6.91091 1.4751 7.3117 1.71084 7.64805C1.94659 7.98441 2.28018 8.24003 2.66628 8.38016V14.5002C2.66628 14.677 2.73652 14.8465 2.86155 14.9716C2.98657 15.0966 3.15614 15.1668 3.33295 15.1668C3.50976 15.1668 3.67933 15.0966 3.80436 14.9716C3.92938 14.8465 3.99962 14.677 3.99962 14.5002V8.38016C4.38572 8.24003 4.71931 7.98441 4.95506 7.64805C5.1908 7.3117 5.31727 6.91091 5.31727 6.50016C5.31727 6.08942 5.1908 5.68863 4.95506 5.35227C4.71931 5.01592 4.38572 4.7603 3.99962 4.62016ZM3.33295 7.16683C3.2011 7.16683 3.0722 7.12773 2.96257 7.05448C2.85294 6.98122 2.76749 6.8771 2.71703 6.75529C2.66657 6.63347 2.65337 6.49942 2.67909 6.3701C2.70482 6.24078 2.76831 6.12199 2.86155 6.02876C2.95478 5.93552 3.07357 5.87203 3.20289 5.84631C3.33221 5.82058 3.46626 5.83378 3.58807 5.88424C3.70989 5.9347 3.81401 6.02015 3.88726 6.12978C3.96052 6.23942 3.99962 6.36831 3.99962 6.50016C3.99962 6.67697 3.92938 6.84654 3.80436 6.97157C3.67933 7.09659 3.50976 7.16683 3.33295 7.16683Z"
                      fill="#1F1D14"
                    />
                  </svg>
                </span>
                <span>Сравнить</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-[50%]">
            <p className="text-[32px] font-medium mb-[30px]">Описание</p>
            <div className="py-[40px] px-[70px] bg-white rounded-lg h-[470px]">
              <h2 className="text-[24px] font-medium mb-7">
                {data?.product_name}
              </h2>
              <p className="mb-[50px]">{data?.description}</p>
              <div className="grid grid-cols-2 gap-y-[30px]">
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[20px] font-medium">Вес гантела:</span>
                  <span>5кг</span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[20px] font-medium">Цвета:</span>
                  <span>{data?.color}</span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[20px] font-medium">Вес гантела:</span>
                  <span>5кг</span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[20px] font-medium">Цвета:</span>
                  <span>Синий, Красный</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <p className="text-[32px] font-medium mb-[30px]">Отзыви</p>
            <div className="py-[40px] px-[70px] bg-white rounded-lg min-h-[470px]">
              <div className="flex flex-col gap-y-10 mb-10">
                <ConfigProvider
                  theme={{
                    components: {
                      Input: {
                        activeBorderColor: "#000",
                        hoverBorderColor: "#000",
                        activeShadow: "#000",
                      },
                    },
                  }}
                >
                  <div className="w-full relative border rounded-md">
                    {loadingSent ? (
                      <LoadingOutlined
                        style={{
                          fontSize: 22,
                          position: "absolute",
                          right: 15,
                          top: 16,
                          zIndex: 10,
                          cursor: "no-drop",
                        }}
                      />
                    ) : (
                      <SendOutlined
                        onClick={createComment}
                        style={
                          handleComment.length > 0
                            ? {
                                fontSize: 22,
                                position: "absolute",
                                right: 10,
                                top: 16,
                                zIndex: 10,
                                cursor: "pointer",
                              }
                            : {
                                fontSize: 22,
                                position: "absolute",
                                right: 10,
                                top: 16,
                                zIndex: 10,
                                cursor: "no-drop",
                              }
                        }
                      />
                    )}
                    <TextArea
                      onChange={(e) => setHandleComment(e.target.value)}
                      style={{
                        border: "none",
                        resize: "none",
                        paddingRight: 40,
                        fontSize: "16px",
                      }}
                      placeholder="Write comment"
                      showCount
                      maxLength={150}
                      value={handleComment}
                    />
                  </div>
                </ConfigProvider>
                {comments?.Comment.length > 0 ? (
                  comments?.Comment.map((comment: any) => (
                    <div className="flex gap-3">
                      <div>
                        <Avatar>{comment.OwnerID.slice(0, 1)}</Avatar>
                      </div>
                      <div>
                        <div className="mb-[13px]">
                          <p className="text-[20px] font-medium">
                            {comment.OwnerID}
                          </p>
                          <p className="opacity-60">клиент</p>
                        </div>
                        <div>
                          <p className="mb-[5px]">{comment.Message}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-[20px] flex items-center justify-center">
                    Нет отзывов
                  </p>
                )}
              </div>
              {comments?.Comment.length > 0 ? (
                params.limit > 3 ? (
                  <div className="flex justify-center">
                    <Button
                      onClick={closeComments}
                      color="inherit"
                      variant="outlined"
                    >
                      Закрывать
                    </Button>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <Button
                      onClick={otherComments}
                      color="inherit"
                      variant="outlined"
                    >
                      Все отзыви
                    </Button>
                  </div>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Index;
