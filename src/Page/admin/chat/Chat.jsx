import React, { useEffect } from "react";
import { io } from "socket.io-client";
function Chat() {
  useEffect(() => {
    const socket = io("http://localhost:5000", { transports: ["websocket"] });

    socket.emit("message", "hello2");

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="mt-[50px] bg-[#141619] flex flex-col gap-[7px] items-start justify-start overflow-hidden px-7 py-[5px] rounded-[14px] w-full">
      <div
        className="flex flex-grow-0 flex-shrink-0 gap-5 items-center justify-start relative w-full"
        data-pg-collapsed
      >
        <svg
          width="30"
          height="34"
          viewBox="0 0 30 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 "
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M28.6313 3.275C28.2032 2.96658 27.7085 2.76341 27.1873 2.68196C26.6661 2.60052 26.133 2.6431 25.6313 2.80625C24.3078 3.17841 22.9371 3.35527 21.5625 3.33125C19.5311 3.22098 17.5393 2.72463 15.6938 1.86875C13.4138 0.814309 10.9476 0.221667 8.43752 0.125C3.01878 0.125 0.937531 2 0.562532 2.2625C0.38311 2.43836 0.24086 2.64848 0.144231 2.88039C0.0476021 3.1123 -0.00143534 3.36127 3.19818e-05 3.6125V32C3.19818e-05 32.4972 0.197576 32.9742 0.549207 33.3258C0.900837 33.6774 1.37775 33.875 1.87503 33.875C2.37231 33.875 2.84922 33.6774 3.20085 33.3258C3.55248 32.9742 3.75003 32.4972 3.75003 32V23.9375C5.24408 23.3655 6.83903 23.1039 8.43752 23.1687C10.4689 23.279 12.4607 23.7753 14.3063 24.6312C16.5862 25.6857 19.0524 26.2783 21.5625 26.375C23.8228 26.4603 26.0714 26.0106 28.125 25.0625C28.6785 24.8025 29.1478 24.3921 29.4793 23.8783C29.8108 23.3644 29.9913 22.7677 30 22.1562V5.95624C29.9993 5.43307 29.875 4.91747 29.6371 4.4515C29.3993 3.98553 29.0546 3.5824 28.6313 3.275ZM26.25 21.8562C24.7554 22.4262 23.1609 22.6877 21.5625 22.625C19.5286 22.5172 17.5352 22.0141 15.6938 21.1437C13.4095 20.1045 10.9451 19.5187 8.43752 19.4187C6.85784 19.3915 5.28154 19.5744 3.75003 19.9625V4.6625C5.24059 4.07625 6.83722 3.80802 8.43752 3.875C10.4714 3.98277 12.4648 4.4859 14.3063 5.35624C16.5906 6.39546 19.0549 6.9813 21.5625 7.08124C23.1432 7.10458 24.7198 6.91539 26.25 6.51874V21.8562Z"
            fill="white"
          ></path>
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M28.98 11.325L26.145 10.38L27.48 7.71C27.6153 7.43053 27.6606 7.11595 27.6095 6.80966C27.5585 6.50337 27.4137 6.22048 27.195 6L24 2.805C23.7784 2.58313 23.4927 2.43631 23.1833 2.38519C22.8739 2.33407 22.5562 2.38122 22.275 2.52L19.605 3.855L18.66 1.02C18.5602 0.724493 18.3708 0.467443 18.118 0.284627C17.8653 0.101811 17.5619 0.00232151 17.25 5.0003e-06H12.75C12.4355 -0.000806742 12.1288 0.0972334 11.8731 0.280268C11.6173 0.463302 11.4256 0.722073 11.325 1.02L10.38 3.855L7.71 2.52C7.43053 2.38467 7.11595 2.33941 6.80966 2.39046C6.50337 2.44151 6.22048 2.58635 6 2.805L2.805 6C2.58313 6.22165 2.43631 6.50727 2.38519 6.81669C2.33407 7.12611 2.38122 7.44377 2.52 7.725L3.855 10.395L1.02 11.34C0.724493 11.4398 0.467443 11.6292 0.284627 11.882C0.101811 12.1347 0.00232151 12.4381 5.0003e-06 12.75V17.25C-0.000806742 17.5645 0.0972334 17.8712 0.280268 18.1269C0.463302 18.3827 0.722073 18.5744 1.02 18.675L3.855 19.62L2.52 22.29C2.38467 22.5695 2.33941 22.8841 2.39046 23.1903C2.44151 23.4966 2.58635 23.7795 2.805 24L6 27.195C6.22165 27.4169 6.50727 27.5637 6.81669 27.6148C7.12611 27.6659 7.44377 27.6188 7.725 27.48L10.395 26.145L11.34 28.98C11.4406 29.2779 11.6323 29.5367 11.8881 29.7197C12.1438 29.9028 12.4505 30.0008 12.765 30H17.265C17.5795 30.0008 17.8862 29.9028 18.1419 29.7197C18.3977 29.5367 18.5894 29.2779 18.69 28.98L19.635 26.145L22.305 27.48C22.5827 27.6119 22.8942 27.6553 23.1974 27.6043C23.5005 27.5534 23.7807 27.4105 24 27.195L27.195 24C27.4169 23.7784 27.5637 23.4927 27.6148 23.1833C27.6659 22.8739 27.6188 22.5562 27.48 22.275L26.145 19.605L28.98 18.66C29.2755 18.5602 29.5326 18.3708 29.7154 18.118C29.8982 17.8653 29.9977 17.5619 30 17.25V12.75C30.0008 12.4355 29.9028 12.1288 29.7197 11.8731C29.5367 11.6173 29.2779 11.4256 28.98 11.325ZM27 16.17L25.2 16.77C24.7861 16.9043 24.4063 17.127 24.0871 17.4227C23.7678 17.7183 23.5167 18.0799 23.3512 18.4824C23.1857 18.8848 23.1096 19.3184 23.1284 19.7532C23.1472 20.1879 23.2604 20.6134 23.46 21L24.315 22.71L22.665 24.36L21 23.46C20.6153 23.2684 20.194 23.1616 19.7645 23.1469C19.335 23.1323 18.9073 23.2101 18.5105 23.3751C18.1136 23.5401 17.7569 23.7884 17.4644 24.1033C17.1719 24.4181 16.9504 24.7921 16.815 25.2L16.215 27H13.83L13.23 25.2C13.0957 24.7861 12.873 24.4063 12.5773 24.0871C12.2817 23.7678 11.9201 23.5167 11.5176 23.3512C11.1152 23.1857 10.6816 23.1096 10.2468 23.1284C9.8121 23.1472 9.38665 23.2604 9 23.46L7.29 24.315L5.64 22.665L6.54 21C6.73964 20.6134 6.85278 20.1879 6.87157 19.7532C6.89036 19.3184 6.81435 18.8848 6.64881 18.4824C6.48327 18.0799 6.23217 17.7183 5.91292 17.4227C5.59367 17.127 5.21392 16.9043 4.8 16.77L3 16.17V13.83L4.8 13.23C5.21392 13.0957 5.59367 12.873 5.91292 12.5773C6.23217 12.2817 6.48327 11.9201 6.64881 11.5176C6.81435 11.1152 6.89036 10.6816 6.87157 10.2468C6.85278 9.8121 6.73964 9.38665 6.54 9L5.685 7.335L7.335 5.685L9 6.54C9.38665 6.73964 9.8121 6.85278 10.2468 6.87157C10.6816 6.89036 11.1152 6.81435 11.5176 6.64881C11.9201 6.48327 12.2817 6.23217 12.5773 5.91292C12.873 5.59367 13.0957 5.21392 13.23 4.8L13.83 3H16.17L16.77 4.8C16.9043 5.21392 17.127 5.59367 17.4227 5.91292C17.7183 6.23217 18.0799 6.48327 18.4824 6.64881C18.8848 6.81435 19.3184 6.89036 19.7532 6.87157C20.1879 6.85278 20.6134 6.73964 21 6.54L22.71 5.685L24.36 7.335L23.46 9C23.2684 9.38467 23.1616 9.80602 23.1469 10.2355C23.1323 10.665 23.2101 11.0927 23.3751 11.4895C23.5401 11.8864 23.7884 12.2431 24.1033 12.5356C24.4181 12.8281 24.7921 13.0496 25.2 13.185L27 13.785V16.17ZM15 9C13.8133 9 12.6533 9.3519 11.6666 10.0112C10.6799 10.6705 9.91085 11.6075 9.45672 12.7039C9.0026 13.8003 8.88378 15.0067 9.11529 16.1705C9.3468 17.3344 9.91825 18.4035 10.7574 19.2426C11.5965 20.0818 12.6656 20.6532 13.8295 20.8847C14.9933 21.1162 16.1997 20.9974 17.2961 20.5433C18.3925 20.0891 19.3295 19.3201 19.9888 18.3334C20.6481 17.3467 21 16.1867 21 15C21 13.4087 20.3679 11.8826 19.2426 10.7574C18.1174 9.63214 16.5913 9 15 9ZM15 18C14.4067 18 13.8266 17.8241 13.3333 17.4944C12.8399 17.1648 12.4554 16.6962 12.2284 16.148C12.0013 15.5999 11.9419 14.9967 12.0576 14.4147C12.1734 13.8328 12.4591 13.2982 12.8787 12.8787C13.2982 12.4591 13.8328 12.1734 14.4147 12.0576C14.9967 11.9419 15.5999 12.0013 16.148 12.2284C16.6962 12.4554 17.1648 12.8399 17.4944 13.3333C17.8241 13.8266 18 14.4067 18 15C18 15.7956 17.6839 16.5587 17.1213 17.1213C16.5587 17.6839 15.7956 18 15 18Z"
            fill="white"
          ></path>
        </svg>
        <div className="flex-grow-0 flex-shrink-0 w-[34px] h-[34px]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[99.5px] top-[3.5px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M15 0C11.0231 0.00452817 7.21046 1.58633 4.3984 4.3984C1.58633 7.21046 0.00452817 11.0231 0 15C0 19.0077 1.56116 22.7737 4.39478 25.6052C5.78392 27.0028 7.43657 28.1109 9.257 28.8653C11.0774 29.6197 13.0295 30.0054 15 30C18.9769 29.9955 22.7895 28.4137 25.6016 25.6016C28.4137 22.7895 29.9955 18.9769 30 15C29.9955 11.0231 28.4137 7.21046 25.6016 4.3984C22.7895 1.58633 18.9769 0.00452817 15 0ZM15 2.13858C18.4098 2.14254 21.6789 3.49885 24.09 5.90998C26.5011 8.3211 27.8575 11.5902 27.8614 15C27.8585 18.2338 26.6314 21.3466 24.4269 23.7126C22.9716 21.9898 21.0766 20.6935 18.9435 19.9615C19.6841 19.3609 20.2814 18.6028 20.6921 17.7423C21.1027 16.8818 21.3163 15.9406 21.3174 14.9872C21.3148 14.144 21.146 13.3097 20.8205 12.5319C20.495 11.7541 20.0192 11.0482 19.4205 10.4546C18.8217 9.86105 18.1117 9.39142 17.3311 9.07267C16.5506 8.75392 15.7148 8.5923 14.8717 8.59709C14.0289 8.59961 13.1949 8.76832 12.4174 9.09355C11.6399 9.41879 10.9342 9.89416 10.3407 10.4925C9.74714 11.0908 9.27743 11.8003 8.95842 12.5803C8.63942 13.3604 8.47739 14.1957 8.48161 15.0385C8.48161 17.0252 9.41403 18.781 10.8426 19.9529C8.75288 20.6652 6.88902 21.9181 5.44055 23.5843C3.31059 21.2331 2.13332 18.1725 2.13858 15C2.14254 11.5902 3.49885 8.3211 5.90998 5.90998C8.3211 3.49885 11.5902 2.14254 15 2.13858ZM14.9252 10.7357C17.2712 10.7357 19.1766 12.6433 19.1766 15.0385C19.1739 16.1402 18.7436 17.1978 17.9765 17.9884C17.2094 18.7791 16.1652 19.2411 15.0642 19.2772C15.0021 19.2772 14.9423 19.2643 14.8802 19.2643C14.8268 19.2643 14.7754 19.275 14.722 19.2772C13.6157 19.2339 12.5697 18.7621 11.805 17.9615C11.0403 17.1609 10.617 16.0943 10.6245 14.9872C10.6245 12.6433 12.5299 10.7357 14.9252 10.7357ZM14.7198 21.4115C14.7712 21.4136 14.8225 21.4286 14.8738 21.4286H14.9252C14.9722 21.4286 15.0107 21.4136 15.0577 21.4115C16.5497 21.4375 18.0183 21.7858 19.3631 22.4325C20.7078 23.0793 21.8968 24.0091 22.8486 25.1583C20.6071 26.9094 17.8445 27.8609 15 27.8614C12.0911 27.8673 9.26751 26.8788 6.99743 25.0599C7.95168 23.9382 9.13394 23.0326 10.4655 22.4035C11.7971 21.7744 13.2474 21.4362 14.7198 21.4115Z"
              fill="white"
            ></path>
          </svg>
          <div className="w-[19px] h-[19px] absolute left-[115px] top-0 overflow-hidden rounded-[71px] bg-[#f00]">
            <p className="w-[11px] h-[11px] absolute left-1 top-1 text-[7px] font-medium text-center text-white">
              10{" "}
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-grow-0 flex-shrink-0 gap-[33px] items-start justify-start p-5 w-full [&>:nth-child(1)]:w-[30%] [&>:nth-child(1)]:w-[70%]"
        data-pg-collapsed
      >
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[526px] overflow-hidden gap-[325px] px-2.5 py-[18px] rounded-[14px] bg-[#212529]">
          <div className="bg-[#444] flex flex-col flex-grow-0 flex-shrink-0 items-center justify-center overflow-hidden px-[33px] py-[3px] rounded-[14px] w-full">
            <div
              className="flex flex-col flex-grow-0 flex-shrink-0 h-[46px] items-end justify-start overflow-hidden w-full"
              data-pg-collapsed
            >
              <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-[5px]">
                <div className="flex-grow-0 flex-shrink-0 w-[164px] h-[38px] relative overflow-hidden rounded-[14px] bg-white">
                  <p className="w-[92px] h-5 absolute left-[52px] top-2.5 text-[15px] font-medium text-right text-black">
                    سلام{" "}
                  </p>
                </div>
                <img
                  src="✨-book.png"
                  className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded-[42px] object-contain"
                />
              </div>
            </div>
            <div
              className="flex flex-col flex-grow-0 flex-shrink-0 h-10 items-start justify-start overflow-hidden w-full"
              data-pg-collapsed
            >
              <div className="flex justify-start items-end flex-grow-0 flex-shrink-0 relative gap-[7px]">
                <img
                  src="✨-book.png"
                  className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded-[42px] object-contain"
                />
                <div className="flex-grow-0 flex-shrink-0 w-[164px] h-[38px] relative overflow-hidden rounded-[14px] bg-white">
                  <p className="w-[92px] h-5 absolute left-[52px] top-2.5 text-[15px] font-medium text-right text-black">
                    سلام{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[#2b2f33] flex flex-grow-0 flex-shrink-0 gap-2.5 items-start justify-start overflow-hidden px-[7px] py-3 relative rounded-[14px] w-[470px] w-full"
            data-pg-collapsed
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px]"
              preserveAspectRatio="none"
            >
              <mask
                id="mask0_929_31"
                style={{ "mask-type": "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="30"
                height="30"
              >
                <path d="M0 30L30 30L30 0L0 0L0 30Z" fill="white"></path>
              </mask>
              <g mask="url(#mask0_929_31)">
                <path
                  d="M26.1488 12.9667L17.3977 14.717C16.6163 14.8731 16.6163 15.1271 17.3977 15.2832L26.1488 17.0335C26.67 17.1376 27.1777 17.6457 27.2818 18.1665L29.0321 26.9176C29.1886 27.6995 28.7279 28.0628 28.0036 27.7285L1.29942 15.4037C0.81708 15.181 0.81708 14.8192 1.29942 14.5965L28.0036 2.27166C28.7279 1.93744 29.1886 2.30072 29.0321 3.0826L27.2818 11.8337C27.1777 12.3545 26.67 12.8626 26.1488 12.9667Z"
                  fill="white"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[525px] overflow-hidden gap-2.5 px-8 py-[30px] rounded-[14px] bg-[#212529]">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-1.5 py-[5px] rounded-[14px] bg-[#444]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]">
              <div className="flex-grow-0 flex-shrink-0 w-56 h-[54px] relative">
                <p className="w-[153px] h-[29px] absolute left-[71px] top-0 text-[15px] font-medium text-right text-white">
                  ali mohamadi{" "}
                </p>
                <p className="w-[197px] h-[25px] absolute left-[27px] top-[29px] text-[15px] font-medium text-center text-white">
                  ..............................................{" "}
                </p>
              </div>
              <img
                src="✨-book.png"
                className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded-[42px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;