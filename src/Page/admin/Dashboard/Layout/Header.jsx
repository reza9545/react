import React from "react";
// import tw from "tailwind-styled-components";
import styled from "./Header.module.css";
function Header() {
  console.log(styled);

  return (
    <>
      <div className=" fixed flex justify-center items-center w-full h-16  py-[4.75px] bg-[#17181d] z-50 p-5">
        <div className="flex flex-col justify-center items-center flex-grow h-[54.5px]">
          <div className="flex flex-row-reverse justify-end items-end self-stretch flex-grow-0 flex-shrink-0 [&>*]:h-full [&>:nth-child(1)]:w-[15%] [&>:nth-child(2)]:w-[50%] [&>:nth-child(3)]:w-[35%]">
            <div className="flex flex-col justify-end items-end">
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 pl-2 pt-[6.980000019073486px] pb-[9.520000457763672px]">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden">
                  <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[22px]  relative overflow-hidden px-[0.0833333358168602px]">
                    <svg
                      width="134"
                      height="23"
                      viewBox="0 0 134 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-grow-0 flex-shrink-0 w-[133.83px] h-[22px] relative"
                      preserveAspectRatio="none"
                    >
                      <g clipPath="url(#clip0_504_1606)">
                        <path
                          d="M15.7742 19.031C16.0373 18.635 16.2628 18.2124 16.4461 17.7687C15.81 18.6395 15.0436 19.1162 14.2544 19.0438C13.2589 18.9503 12.0755 17.3168 12.994 14.6557C11.0974 14.8922 10.2192 19.2537 11.4925 21.56L11.9398 21.5041C12.5968 21.4253 13.2325 21.2202 13.8116 20.9C14.6069 20.4439 15.2802 19.8033 15.7742 19.031ZM10.684 2.42188L10.254 2.47779C9.60477 2.56027 8.97842 2.77124 8.41155 3.09838C7.61008 3.5847 6.93257 4.2506 6.43246 5.04354C6.25646 5.30937 6.10063 5.59079 5.9668 5.88321C6.5498 5.21221 7.21071 4.85196 7.90463 4.91979C8.90471 5.01329 10.089 6.64679 9.16413 9.30604C11.0616 9.06954 11.9444 4.73004 10.684 2.42188Z"
                          fill="white"
                        ></path>
                        <path
                          d="M21.3631 7.89531C20.2191 4.96748 18.0264 2.63181 15.2627 1.39615C15.2493 1.38432 15.232 1.37779 15.2141 1.37781C14.8542 1.22092 14.4842 1.08802 14.1068 0.97998C15.6981 1.9379 17.3884 5.66781 17.9357 8.85598C18.0558 9.5554 18.1291 10.264 18.1538 10.9744V10.9863C18.1703 11.3612 18.1823 11.727 18.1823 12.1111C18.1935 13.4991 18.0415 14.8836 17.7294 16.2361C17.4698 17.3856 17.0133 18.4816 16.3801 19.4756C15.817 20.3458 15.0538 21.0687 14.1544 21.5839C13.4956 21.9519 12.7708 22.1867 12.0213 22.2751C12.1799 22.4346 12.3596 22.5684 12.5548 22.672C12.8665 22.8306 13.2103 22.9066 13.5558 22.8956C15.2104 22.8956 17.6194 21.5344 19.3629 19.5086C22.0295 16.4331 22.8188 11.6683 21.3631 7.89531ZM4.7421 17.2416C4.73018 17.205 4.72377 17.1802 4.71185 17.1481C4.61835 16.8548 4.53402 16.5523 4.45977 16.2406C4.3846 15.929 4.31218 15.6063 4.2581 15.2781L4.22327 15.0911C4.20493 14.9601 4.18202 14.8363 4.1701 14.7043C4.14271 14.5588 4.12313 14.4119 4.11143 14.2643C4.05277 13.8041 4.01977 13.3421 4.01152 12.8783C4.00115 12.7533 3.99717 12.6279 3.9996 12.5025V12.0946C3.98811 10.6892 4.14257 9.28738 4.45977 7.91823C4.72314 6.74557 5.18275 5.62584 5.81918 4.60631C6.38433 3.71649 7.14645 2.96848 8.04668 2.42006C8.69611 2.04215 9.41503 1.79898 10.1605 1.70506C9.99683 1.53942 9.81078 1.39749 9.60777 1.2834C9.29875 1.1305 8.95689 1.0559 8.61227 1.06615C6.97327 1.06615 4.5881 2.40173 2.84643 4.38906C2.8394 4.39928 2.83073 4.40826 2.82077 4.41565C2.8131 4.42917 2.80353 4.44152 2.79235 4.45231C2.78072 4.46318 2.77056 4.4755 2.7621 4.48898C2.66218 4.60631 2.56868 4.72456 2.47427 4.84281C2.20202 5.20398 1.9481 5.57981 1.71343 5.96756C1.5851 6.18023 1.46593 6.39748 1.35777 6.61473C1.30643 6.72015 1.25327 6.82556 1.2001 6.9429C-0.113484 9.77081 -0.296818 13.201 0.805932 16.0637C1.95085 18.9989 4.14718 21.3391 6.91827 22.5766C6.97143 22.6014 7.0246 22.6197 7.07227 22.6463C7.12085 22.672 7.18227 22.6894 7.23085 22.7077L7.29502 22.7325C7.54343 22.826 7.80102 22.9066 8.06135 22.98C6.82018 22.2375 5.51302 19.7955 4.74302 17.2416H4.7421Z"
                          fill="white"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M118.983 20.2079H117.523L124.473 12.0771L118.133 3.72995H121.434L126.226 10.0531L131.618 3.72995H133.088L126.891 10.9679L133.916 20.2079H130.594L125.147 12.9919L118.983 20.2079ZM41.8882 3.74095V15.7887H41.7691L32.0423 3.74095H29.417V20.2079H30.6701V7.20137H30.7672L41.3547 20.2089H43.1193V3.74003H41.8882V3.74095ZM50.8743 19.5553C51.9312 19.9907 53.0743 20.2079 54.2944 20.2079C55.1112 20.2079 55.8958 20.1099 56.6365 19.9146C57.3663 19.7256 58.069 19.444 58.7274 19.0768C59.3672 18.721 59.9569 18.2817 60.481 17.7705C60.9994 17.2663 61.4532 16.6998 61.8322 16.0839C62.2104 15.4616 62.5033 14.7913 62.703 14.091C62.9094 13.3767 63.0122 12.6364 63.0082 11.8929C63.0123 11.1562 62.9095 10.4229 62.703 9.71578C62.505 9.02903 62.2119 8.37337 61.8322 7.76787C61.4527 7.162 60.9988 6.60613 60.481 6.11328C59.956 5.61239 59.3662 5.18415 58.7274 4.84003C58.0643 4.48816 57.3627 4.21439 56.6365 4.0242C55.8718 3.82533 55.0845 3.72642 54.2944 3.72995C53.4777 3.72995 52.693 3.82803 51.9523 4.02328C51.2117 4.21945 50.515 4.4917 49.8715 4.84003C49.2377 5.19198 48.6491 5.61986 48.1188 6.1142C47.598 6.6039 47.1437 7.15987 46.7677 7.76787C46.3959 8.37615 46.1068 9.03121 45.9078 9.71578C45.7013 10.4229 45.5985 11.1562 45.6026 11.8929C45.6026 13.0359 45.8317 14.113 46.2782 15.1259C46.7135 16.119 47.3388 17.0174 48.1188 17.7705C48.9151 18.5358 49.8504 19.1416 50.8743 19.5553ZM56.6906 18.8586C55.9939 19.2399 55.1982 19.4242 54.2944 19.4242C53.3796 19.4242 52.5738 19.2399 51.8762 18.8586C51.1906 18.4773 50.6131 17.9447 50.1337 17.2801C49.6542 16.6164 49.3059 15.8116 49.0657 14.8968C48.8274 13.9829 48.7064 12.9709 48.7064 11.8819C48.7064 10.7938 48.8265 9.80287 49.0657 8.89995C49.3059 8.00712 49.6652 7.22337 50.1337 6.5707C50.5838 5.93031 51.1815 5.40774 51.8762 5.0472C52.5729 4.68787 53.3796 4.5027 54.2944 4.5027C55.1982 4.5027 55.9939 4.68787 56.6906 5.0472C57.3872 5.40653 57.9647 5.91803 58.4442 6.5707C58.9236 7.22337 59.2829 7.99612 59.5231 8.89903C59.7614 9.80287 59.8824 10.7938 59.8824 11.8819C59.8824 12.9709 59.7623 13.9829 59.5231 14.8977C59.2829 15.8116 58.9236 16.6055 58.4442 17.281C57.9892 17.9352 57.389 18.4751 56.6906 18.8586ZM65.4915 3.74095H72.1364C73.0182 3.74095 73.824 3.83903 74.5537 4.03428C75.2833 4.23045 75.9158 4.50178 76.4493 4.86203C76.9718 5.22137 77.3862 5.64578 77.6685 6.14537C77.9637 6.64678 78.1048 7.19037 78.1048 7.78987C78.1048 8.24637 78.0608 8.6497 77.9637 9.00903C77.8741 9.37077 77.7068 9.70863 77.4732 9.99903C77.2441 10.3034 76.9287 10.5866 76.5474 10.8589C76.1661 11.1311 75.6766 11.4034 75.0881 11.6857V11.7407C75.6376 11.8194 76.1729 11.9768 76.6776 12.2082C77.146 12.4374 77.5484 12.7197 77.8876 13.057C78.2249 13.4054 78.4862 13.8087 78.6603 14.2652C78.8455 14.7226 78.9326 15.2231 78.9326 15.7777C78.9326 16.3983 78.8015 16.9868 78.5292 17.5194C78.2523 18.0699 77.858 18.553 77.3742 18.9347C76.8737 19.338 76.2642 19.6534 75.5565 19.8816C74.8479 20.1108 74.0532 20.2299 73.1704 20.2299H65.4704V3.74095H65.4915ZM68.258 11.1522H71.7872C72.3427 11.1522 72.8322 11.0761 73.2685 10.9139C73.6748 10.778 74.0465 10.5549 74.3575 10.2603C74.6517 9.97703 74.88 9.6507 75.0331 9.27028C75.1885 8.87128 75.2662 8.44629 75.2622 8.01812C75.2702 7.56783 75.1771 7.12149 74.99 6.71187C74.7955 6.30899 74.5034 5.96111 74.1402 5.69987C73.7589 5.41662 73.2694 5.19937 72.6699 5.0582C72.0814 4.90512 71.3627 4.82903 70.5341 4.82903H68.247V11.1531L68.258 11.1522ZM68.258 19.0108H71.2537C72.0603 19.0108 72.757 18.9347 73.3446 18.7816C73.9331 18.6304 74.4235 18.4122 74.8149 18.1399C75.1834 17.8859 75.4802 17.5411 75.6766 17.1389C75.8608 16.7475 75.9589 16.3231 75.9589 15.8547C75.961 15.3577 75.8763 14.8642 75.7087 14.3963C75.5422 13.9439 75.2607 13.5426 74.8919 13.2321C74.5106 12.9049 74.0211 12.6436 73.4106 12.4584C72.8001 12.2733 72.0484 12.1761 71.1666 12.1761H68.258V19.0108ZM85.2072 3.74095H82.4297V20.219H85.2072V3.74095ZM102.045 3.74095V4.80703H96.0761V20.219H93.2986V4.80703H87.3302V3.74095H102.045ZM115.639 4.80703V3.74095H104.18V20.2079H115.639V19.1419H106.947V11.7627H112.763V10.6957H106.947V4.80703H115.639Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_504_1606">
                          <rect
                            width="133.833"
                            height="22"
                            fill="white"
                            transform="translate(0.0834961 0.97998)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row-reverse justify-center items-center self-stretch flex-grow-0 flex-shrink-0  [&>*]:w-[20%]">
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 ">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 px-2 pt-[7.25px] pb-2">
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.75px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right text-white">
                        بازار
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 ">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 px-2 pt-[7.25px] pb-2">
                    <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.75px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right text-white">
                        سفارش سریع
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 ">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 px-2 pt-[7.25px] pb-2">
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.75px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right text-white">
                        دعوت از دوستان
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 ">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 px-2 pt-[7.25px] pb-2">
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.75px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right text-white">
                        راهنمای استفاده
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 ">
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 px-2 pt-[7.25px] pb-2">
                    <div className="flex flex-col justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative pb-[0.75px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right text-white">
                        سوالی دارید؟
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse justify-end items-center flex-grow-0 flex-shrink-0">
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 pr-6 pb-[1.2300000190734863px]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-6 h-6 relative pl-[7.380000114440918px] pr-[7.369999885559082px] pt-[5px] rounded-3xl bg-[#e3e4e5]">
                  <p className="flex-grow-0 flex-shrink-0 text-[19px] font-black text-center text-[#212529]">
                    ?
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 pr-6 pb-[1.2300000190734863px]">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 h-6 relative px-[3px] pt-[3px] pb-px rounded-3xl bg-[#e3e4e5]">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M9.99238 17.5581C9.58436 17.5581 9.19304 17.3959 8.90453 17.1074C8.61601 16.8189 8.45392 16.4277 8.45392 16.0196H11.5308C11.5308 16.4277 11.3688 16.8189 11.0802 17.1074C10.7917 17.3959 10.4004 17.5581 9.99238 17.5581ZM15.0539 15.2504H4.92316C4.77137 15.252 4.62267 15.2075 4.49652 15.1231C4.37037 15.0387 4.27266 14.9181 4.21623 14.7772C4.15534 14.6357 4.1388 14.4794 4.16874 14.3283C4.19868 14.1772 4.2737 14.0388 4.38393 13.9313L5.3847 12.9427V9.09657C5.36172 7.98801 5.67672 6.89866 6.28778 5.97345C6.89155 5.0926 7.80505 4.4718 8.84624 4.23441V3.71195C8.84624 3.40593 8.9678 3.11253 9.18418 2.89615C9.40057 2.67976 9.69406 2.55811 10.0001 2.55811C10.3061 2.55811 10.5996 2.67976 10.816 2.89615C11.0324 3.11253 11.1539 3.40593 11.1539 3.71195V4.23441C12.1942 4.47392 13.1063 5.09557 13.7093 5.97645C14.3215 6.90016 14.6376 7.98863 14.6155 9.09657V12.9427L15.6001 13.9351C15.7085 14.0426 15.7825 14.1801 15.8126 14.3298C15.8426 14.4795 15.8275 14.6346 15.769 14.7757C15.7105 14.9167 15.6113 15.0374 15.4841 15.122C15.3569 15.2065 15.2074 15.2511 15.0547 15.2504H15.0539ZM3.18471 8.71195C3.07289 8.71196 2.96239 8.68792 2.86073 8.64134C2.75907 8.59476 2.66864 8.52659 2.59563 8.44189C2.52262 8.3572 2.46873 8.25784 2.43764 8.15043C2.40655 8.04302 2.399 7.93012 2.41548 7.81952C2.70378 6.02653 3.59031 4.3838 4.93086 3.15869C5.04129 3.05566 5.17961 2.98757 5.32857 2.96263C5.47753 2.93769 5.63054 2.95715 5.76852 3.01859C5.90649 3.08003 6.02332 3.18078 6.10444 3.30818C6.18557 3.43558 6.22739 3.58385 6.22471 3.73486C6.22225 3.83682 6.19894 3.93748 6.15621 4.03009C6.11348 4.12269 6.05223 4.20544 5.97625 4.27348C4.88527 5.27204 4.16662 6.61215 3.93854 8.07343C3.90784 8.25142 3.81549 8.41305 3.67766 8.52979C3.53983 8.64652 3.36533 8.71097 3.18471 8.71195ZM16.8147 8.70444C16.6337 8.70562 16.4582 8.64187 16.3201 8.5249C16.182 8.40793 16.0903 8.24539 16.0616 8.06667C15.8301 6.60638 15.1117 5.26729 14.0232 4.26671C13.9477 4.19782 13.8871 4.1141 13.8449 4.02107C13.8027 3.92804 13.7798 3.8276 13.7777 3.72547C13.7755 3.62334 13.7941 3.5216 13.8323 3.42687C13.8706 3.33214 13.9276 3.24611 14.0001 3.17409C14.0713 3.10249 14.1561 3.04588 14.2495 3.00732C14.3428 2.96876 14.4429 2.94902 14.5439 2.94948C14.7417 2.9495 14.9321 3.02421 15.077 3.15869C16.406 4.38749 17.2859 6.02558 17.577 7.81201C17.5944 7.92094 17.588 8.03219 17.5582 8.13841C17.5285 8.24463 17.4761 8.34317 17.4047 8.42725C17.3324 8.5133 17.2423 8.58276 17.1405 8.63045C17.0388 8.67814 16.9278 8.70283 16.8155 8.70331L16.8147 8.70444Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative px-6 pb-[1.2300000190734863px]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <g clipPath="url(#clip0_504_1568)">
                      <path
                        d="M12 24.635C9.62663 24.635 7.30655 23.9312 5.33316 22.6127C3.35977 21.2941 1.8217 19.4199 0.913451 17.2272C0.0051995 15.0345 -0.232441 12.6217 0.230582 10.2939C0.693605 7.96616 1.83649 5.82796 3.51472 4.14973C5.19295 2.4715 7.33115 1.32861 9.65892 0.865592C11.9867 0.402569 14.3995 0.640209 16.5922 1.54846C18.7849 2.45671 20.6591 3.99478 21.9776 5.96817C23.2962 7.94156 24 10.2616 24 12.635C23.9961 15.8164 22.7306 18.8664 20.481 21.116C18.2314 23.3656 15.1814 24.6312 12 24.635ZM12 13.715C9.57515 13.715 4.83515 15.0196 4.80001 17.4119C5.58827 18.5998 6.65822 19.5743 7.91449 20.2484C9.17076 20.9225 10.5743 21.2752 12 21.2752C13.4257 21.2752 14.8292 20.9225 16.0855 20.2484C17.3418 19.5743 18.4117 18.5998 19.2 17.4119C19.1803 16.0747 17.7111 15.1833 16.4829 14.669C15.0579 14.0846 13.5394 13.7615 12 13.715ZM12 4.23501C11.288 4.23501 10.592 4.44615 9.99995 4.84172C9.40794 5.2373 8.94652 5.79954 8.67404 6.45735C8.40156 7.11517 8.33027 7.83901 8.46918 8.53734C8.60809 9.23567 8.95095 9.87713 9.45442 10.3806C9.95789 10.8841 10.5993 11.2269 11.2977 11.3658C11.996 11.5047 12.7199 11.4335 13.3777 11.161C14.0355 10.8885 14.5977 10.4271 14.9933 9.83507C15.3889 9.24305 15.6 8.54703 15.6 7.83502C15.6 6.88024 15.2207 5.96456 14.5456 5.28943C13.8705 4.6143 12.9548 4.23501 12 4.23501Z"
                        fill="#E3E4E5"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_504_1568">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.63501)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
