const template = document.createElement("template");
template.innerHTML = `
    <style lang="scss">
        @import './navbar.scss';  
    </style>

    <header id="navigation-bar-lol">
        <div class="promotion-banner  text-bg-dark">
                <div class="container-wrapper">
                        <h1  class="banner-label"> < </h1>
                        <h1  class="banner-label">Free Shipping</h1>
                        <h1  class="banner-label"> > </h1>
                </div> 
        </div>



        <div class="navigation-banner">
                <div class="container-wrapper">
                        <div class="container">
                                <div class="row">
                                        <div class="col-sm  icon-menu-left">
                                                <div  class="banner-label  sidebar-menu-label">
                                                        <button 
                                                                class="btn  btn-primary  sidebar-toggler"
                                                                id="sidebar-toggle"
                                                                type="button"
                                                                data-bs-toggle="offcanvas"
                                                                data-bs-target="#sidebar-offcanvas"
                                                                aria-controls="offcanvasDarkNavbar"
                                                                aria-controls="offcanvasScrolling"><span class="navbar-toggler-icon"></span>
                                                        </button>
                                                </div>
                                        </div>
                                        <div class="col-sm">
                                                <div  class="banner-label">
                                                        <svg width="280" height="40" viewBox="0 0 280 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <rect width="280" height="39.98" fill="url(#pattern0_5_189)"/>
                                                                <defs>
                                                                <pattern id="pattern0_5_189" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                                <use xlink:href="#image0_5_189" transform="matrix(0.00178482 0 0 0.0125 0.250125 0)"/>
                                                                </pattern>
                                                                <image id="image0_5_189" width="280" height="80" xlink:href="data:image/png;base64,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"/>
                                                                </defs>
                                                        </svg>  
                                                </div>
                                        </div>
                                        <div class="col-sm  icon-menu-right">
                                                <div  class="navigation-label">
                                                        <ul class="navigation-list">
        
                                                                <li class="person-icon">
                                                                        <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M8.97604 0.338001C9.00173 0.338064 9.02742 0.338126 9.05389 0.33819C9.4283 0.339719 9.7843 0.354584 10.148 0.45122C10.1713 0.457086 10.1946 0.462951 10.2187 0.468994C10.9949 0.665827 11.6931 1.02926 12.3036 1.54496C12.3333 1.56972 12.3629 1.59448 12.3934 1.61999C13.1173 2.24292 13.6205 3.11681 13.8861 4.02509C13.8988 4.06806 13.8988 4.06806 13.9117 4.1119C14.031 4.53816 14.0616 4.95846 14.0594 5.39867C14.0593 5.42437 14.0592 5.45006 14.0591 5.47654C14.0574 5.85083 14.0436 6.20593 13.946 6.56931C13.9394 6.59539 13.9328 6.62148 13.926 6.64835C13.7221 7.4429 13.3537 8.13717 12.8169 8.75679C12.7936 8.78423 12.7703 8.81168 12.7463 8.83996C12.5126 9.11037 12.2452 9.32702 11.9614 9.54291C12.0497 9.63108 12.1331 9.65469 12.2501 9.69885C13.7185 10.2716 15.0645 11.2771 15.999 12.5507C16.0208 12.5799 16.0208 12.5799 16.0431 12.6096C16.266 12.9084 16.4656 13.2176 16.6491 13.5419C16.6629 13.5661 16.6767 13.5902 16.6908 13.6151C17.2472 14.6022 17.5882 15.706 17.7227 16.8295C17.726 16.8553 17.7293 16.881 17.7327 16.9076C17.7568 17.1376 17.7239 17.342 17.62 17.5494C17.4812 17.7099 17.3648 17.7999 17.1504 17.8309C16.9362 17.8391 16.7443 17.8386 16.5722 17.6992C16.3415 17.4844 16.3064 17.2336 16.2689 16.9307C16.1138 15.698 15.6715 14.4951 14.9041 13.5077C14.8744 13.468 14.8448 13.4283 14.8152 13.3885C14.68 13.2077 14.5431 13.0345 14.3785 12.879C14.3164 12.8182 14.2609 12.7537 14.2048 12.6874C14.0837 12.5477 13.9512 12.4294 13.8091 12.3114C13.7825 12.2887 13.756 12.266 13.7286 12.2425C13.6315 12.161 13.5328 12.0818 13.4328 12.0038C13.4134 11.9886 13.3939 11.9734 13.3739 11.9578C12.4975 11.2817 11.4637 10.8649 10.3875 10.6366C10.3597 10.6305 10.3319 10.6244 10.3033 10.6181C8.52685 10.242 6.56665 10.6913 5.04385 11.6399C4.90409 11.7324 4.77146 11.8328 4.63908 11.9355C4.59935 11.9651 4.55956 11.9947 4.51972 12.0242C4.33874 12.1593 4.16537 12.2961 4.00968 12.4604C3.94883 12.5225 3.88429 12.5779 3.81788 12.634C3.67797 12.755 3.55962 12.8873 3.44149 13.0292C3.41873 13.0558 3.39597 13.0823 3.37253 13.1097C3.29086 13.2067 3.21157 13.3053 3.13354 13.4052C3.11833 13.4246 3.10311 13.444 3.08743 13.4639C2.31365 14.4648 1.85692 15.6762 1.6978 16.9238C1.65157 17.2726 1.57278 17.5637 1.29012 17.7908C1.09861 17.891 0.8784 17.8793 0.669942 17.8485C0.490205 17.7767 0.330621 17.6554 0.244706 17.4774C0.159622 17.1591 0.240752 16.7903 0.295697 16.4728C0.301331 16.4397 0.301331 16.4397 0.307078 16.406C0.5617 14.9258 1.17054 13.5545 2.10704 12.3798C2.12137 12.3615 2.13569 12.3433 2.15045 12.3244C2.55069 11.8171 3.02506 11.3301 3.54414 10.9443C3.58247 10.9149 3.62078 10.8854 3.65909 10.856C4.38032 10.3087 5.16648 9.90528 6.00774 9.57709C5.89691 9.46479 5.78364 9.35706 5.66558 9.25239C5.54793 9.14718 5.43364 9.04069 5.32341 8.92768C5.30396 8.90979 5.28451 8.89191 5.26447 8.87348C4.68312 8.32625 4.304 7.54486 4.08306 6.78934C4.07462 6.76069 4.06619 6.73205 4.0575 6.70253C3.93821 6.27625 3.90761 5.85598 3.90983 5.41576C3.9099 5.3901 3.90996 5.36444 3.91002 5.338C3.91155 4.96399 3.92643 4.60838 4.02318 4.24512C4.02905 4.22181 4.03492 4.19851 4.04097 4.17449C4.23802 3.39912 4.60185 2.70168 5.11811 2.09183C5.1429 2.06222 5.16769 2.03261 5.19323 2.0021C5.81684 1.27902 6.69168 0.776365 7.60096 0.511034C7.62964 0.50261 7.65831 0.494187 7.68786 0.485508C8.11461 0.366343 8.53534 0.335782 8.97604 0.338001ZM6.14461 3.04885C5.46976 3.89558 5.2172 4.90982 5.33384 5.98152C5.47564 6.9044 6.00026 7.74835 6.72723 8.32647C7.58382 8.9431 8.59324 9.20213 9.64487 9.0409C10.5771 8.8639 11.4302 8.32313 11.985 7.5541C12.5535 6.69565 12.8022 5.6933 12.6071 4.6682C12.3925 3.72057 11.8361 2.8742 11.0209 2.33549C9.39448 1.32937 7.41533 1.6324 6.14461 3.04885Z" fill="#686868"/>
                                                                        </svg>  
                                                                </li>
        
                                                                <li class="search-icon">
                                                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M6.25276 0.589741C6.29093 0.589022 6.29093 0.589022 6.32986 0.588288C6.37123 0.587798 6.37123 0.587798 6.41343 0.587299C6.44215 0.586918 6.47088 0.586537 6.50048 0.586145C7.10923 0.579642 7.68577 0.576916 8.27494 0.747116C8.33443 0.763025 8.39392 0.778927 8.45341 0.794825C9.2241 1.00878 9.94764 1.37085 10.5745 1.86844C10.5992 1.88792 10.5992 1.88792 10.6244 1.9078C11.0616 2.25616 11.4587 2.65615 11.7848 3.11099C11.8038 3.13737 11.8038 3.13737 11.8232 3.16429C12.1783 3.66205 12.4339 4.20039 12.6319 4.77782C12.6395 4.79975 12.6471 4.82168 12.655 4.84428C12.8243 5.34304 12.9192 5.88814 12.9345 6.41434C12.9353 6.43391 12.9361 6.45347 12.9369 6.47362C12.9894 7.90799 12.5287 9.26304 11.694 10.4147C11.8103 10.5541 11.9308 10.6864 12.0597 10.8141C12.0773 10.8317 12.0949 10.8493 12.113 10.8674C12.1715 10.9257 12.2301 10.984 12.2886 11.0422C12.3308 11.0842 12.3729 11.1262 12.4151 11.1683C12.5056 11.2585 12.5961 11.3487 12.6867 11.4389C12.83 11.5816 12.9731 11.7244 13.1162 11.8673C13.1653 11.9162 13.2143 11.9652 13.2634 12.0142C13.2879 12.0387 13.3125 12.0633 13.3378 12.0885C13.6707 12.4209 14.0038 12.7531 14.3372 13.0851C14.5624 13.3093 14.7874 13.5337 15.0121 13.7584C15.1309 13.8772 15.2499 13.9958 15.3691 14.1142C15.4811 14.2255 15.5929 14.3371 15.7045 14.4489C15.7454 14.4898 15.7864 14.5306 15.8276 14.5713C15.8839 14.627 15.9398 14.6831 15.9956 14.7392C16.0118 14.7551 16.0281 14.771 16.0448 14.7874C16.2117 14.9571 16.3103 15.1392 16.312 15.3811C16.3048 15.6186 16.2279 15.7792 16.0643 15.9491C16.0188 15.9892 16.0188 15.9892 15.93 16.0517C15.9085 16.0675 15.8871 16.0834 15.8651 16.0997C15.7476 16.158 15.6473 16.1616 15.5177 16.1634C15.4952 16.165 15.4727 16.1667 15.4495 16.1683C15.1583 16.1731 14.9483 15.9496 14.7502 15.7588C14.6547 15.665 14.5605 15.5699 14.4663 15.4748C14.4236 15.432 14.3809 15.3893 14.3382 15.3466C14.2232 15.2314 14.1085 15.1159 13.9938 15.0004C13.8736 14.8795 13.7531 14.7587 13.6326 14.638C13.405 14.4097 13.1775 14.1811 12.9502 13.9525C12.6912 13.692 12.4319 13.4319 12.1726 13.1717C11.6396 12.6369 11.1069 12.1017 10.5745 11.5664C10.4801 11.6119 10.3955 11.6651 10.3092 11.7247C8.9626 12.6522 7.31516 13.0142 5.7031 12.718C5.09803 12.6037 4.51399 12.4054 3.97226 12.1111C3.91989 12.0826 3.86709 12.055 3.81428 12.0274C3.3121 11.7547 2.86751 11.395 2.4656 10.9906C2.44983 10.9748 2.43406 10.9591 2.41782 10.9429C1.99029 10.5125 1.65084 10.0149 1.37635 9.47525C1.36666 9.45671 1.35697 9.43816 1.34699 9.41905C1.05112 8.84909 0.893682 8.23011 0.784687 7.60056C0.773841 7.53449 0.773841 7.53449 0.740949 7.47505C0.737319 7.43005 0.735509 7.3849 0.734633 7.33976C0.734058 7.31153 0.733483 7.2833 0.73289 7.25421C0.732468 7.22341 0.732046 7.1926 0.731612 7.16087C0.731149 7.12893 0.730686 7.09698 0.730208 7.06407C0.72214 6.37959 0.719434 5.7398 0.922491 5.08088C0.937999 5.02576 0.953482 4.97063 0.96894 4.9155C1.25075 3.95961 1.78436 3.12921 2.4656 2.41395C2.48978 2.38813 2.51396 2.3623 2.53888 2.3357C2.73969 2.127 2.96062 1.95076 3.19177 1.77752C3.21692 1.75854 3.24208 1.73955 3.268 1.71999C4.077 1.13192 4.98402 0.802988 5.96493 0.639395C6.22328 0.590258 6.22328 0.590258 6.25276 0.589741ZM3.7722 3.32289C3.70613 3.38374 3.70613 3.38374 3.62813 3.44566C3.51819 3.53464 3.43273 3.63841 3.34305 3.74741C3.30777 3.79013 3.30777 3.79013 3.27178 3.83371C3.07206 4.08138 2.91417 4.34397 2.76817 4.62629C2.75846 4.6448 2.74874 4.6633 2.73874 4.68237C2.1999 5.7217 2.13844 6.95767 2.47958 8.06847C2.85737 9.23329 3.65514 10.1995 4.74185 10.7687C5.83114 11.3134 7.08432 11.4123 8.24575 11.0428C9.42657 10.6433 10.3801 9.78773 10.9318 8.67284C11.4613 7.56251 11.5019 6.30718 11.1127 5.14824C11.056 4.98825 10.985 4.83759 10.9073 4.6869C10.8887 4.64949 10.8702 4.61209 10.8516 4.57467C10.6282 4.13209 10.3234 3.75963 9.96933 3.41405C9.94716 3.38926 9.94716 3.38926 9.92454 3.36397C9.28991 2.6778 8.30661 2.28822 7.39749 2.1715C7.37124 2.16759 7.34499 2.16369 7.31795 2.15966C6.04799 1.99609 4.70036 2.44962 3.7722 3.32289Z" fill="#5B5B5B"/>
                                                                        </svg>             
                                                                </li>
        
                                                                <li class="bag-icon">
                                                                        <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M8.27325 0.716578C8.30564 0.716398 8.33803 0.716217 8.3714 0.716031C8.43966 0.715791 8.50793 0.715768 8.57619 0.715951C8.67959 0.716084 8.78295 0.715096 8.88635 0.714029C9.22179 0.712645 9.5139 0.717048 9.82511 0.855564C9.87902 0.874105 9.93308 0.892204 9.98729 0.909842C10.6575 1.14293 11.1813 1.48728 11.6778 1.99245C11.7259 2.04057 11.7259 2.04057 11.7749 2.08965C12.601 2.96566 12.8083 4.04038 12.7753 5.19604C12.7739 5.23601 12.7739 5.23601 12.7726 5.27678C12.8235 5.2759 12.8744 5.27501 12.9269 5.27411C13.1181 5.27103 13.3092 5.26911 13.5004 5.26753C13.5827 5.26669 13.6651 5.26554 13.7474 5.26407C14.4789 5.25136 15.0901 5.3332 15.6464 5.85575C16.0635 6.2981 16.2159 6.80597 16.244 7.40174C16.2454 7.43255 16.2469 7.46337 16.2485 7.49511C16.2534 7.59801 16.2582 7.70092 16.2629 7.80382C16.2664 7.87789 16.27 7.95196 16.2735 8.02603C16.2831 8.22776 16.2926 8.4295 16.302 8.63123C16.312 8.84515 16.3222 9.05907 16.3323 9.27298C16.3517 9.68119 16.3709 10.0894 16.39 10.4976C16.4113 10.9513 16.4328 11.4049 16.4542 11.8586C16.473 12.2559 16.4918 12.6531 16.5106 13.0504C16.5126 13.0937 16.5146 13.1369 16.5167 13.1815C16.5579 14.0538 16.5991 14.9261 16.6386 15.7985C16.6473 15.9907 16.6561 16.1828 16.6649 16.3749C16.6716 16.5208 16.6782 16.6668 16.6846 16.8127C16.6915 16.9684 16.6986 17.124 16.7057 17.2797C16.7086 17.3471 16.7086 17.3471 16.7116 17.4159C16.7135 17.4567 16.7154 17.4975 16.7173 17.5395C16.7189 17.5745 16.7205 17.6095 16.7221 17.6456C16.7304 17.7376 16.7499 17.8196 16.7727 17.9088C16.7841 18.1196 16.7859 18.3303 16.7875 18.5414C16.7882 18.6103 16.7893 18.6793 16.7909 18.7482C16.8067 19.4244 16.6531 19.9349 16.1821 20.4431C15.9446 20.6699 15.6802 20.8056 15.3832 20.9405C15.3449 20.9626 15.3449 20.9626 15.3058 20.9851C15.1952 21.0332 15.1126 21.0356 14.9921 21.036C14.9467 21.0364 14.9013 21.0368 14.8545 21.0372C14.7798 21.0371 14.7798 21.0371 14.7035 21.0371C14.6505 21.0374 14.5976 21.0377 14.543 21.0381C14.3959 21.0389 14.2487 21.0392 14.1016 21.0394C13.9429 21.0398 13.7842 21.0406 13.6255 21.0413C13.2421 21.043 12.8588 21.0438 12.4754 21.0446C12.2947 21.0449 12.114 21.0454 11.9333 21.0458C11.3322 21.0473 10.7312 21.0485 10.1301 21.0491C9.97414 21.0493 9.81817 21.0494 9.6622 21.0496C9.60405 21.0496 9.60405 21.0496 9.54473 21.0497C8.91757 21.0504 8.29043 21.0525 7.66328 21.0553C7.01883 21.0581 6.37439 21.0596 5.72993 21.0598C5.36833 21.06 5.00674 21.0608 4.64514 21.0629C4.33699 21.0647 4.02886 21.0654 3.72069 21.0646C3.56368 21.0642 3.40672 21.0644 3.24971 21.066C2.41205 21.0743 1.77988 21.0209 1.15588 20.4106C1.00317 20.2361 0.877792 20.052 0.772151 19.8457C0.757255 19.8189 0.742359 19.7921 0.727012 19.7645C0.553753 19.4081 0.583624 19.0373 0.590566 18.651C0.59105 18.5813 0.591462 18.5116 0.591799 18.4419C0.592364 18.3753 0.592992 18.3087 0.593691 18.2421C0.594002 18.2111 0.594313 18.1801 0.594633 18.1482C0.598726 17.9288 0.598726 17.9288 0.624475 17.826C0.646484 17.7378 0.653933 17.6579 0.658128 17.5673C0.659799 17.5329 0.66147 17.4986 0.663192 17.4632C0.664843 17.4257 0.666494 17.3882 0.668195 17.3496C0.670093 17.3096 0.67199 17.2696 0.673945 17.2283C0.680279 17.0939 0.686369 16.9594 0.692461 16.825C0.696947 16.7287 0.701449 16.6324 0.705964 16.5361C0.718208 16.2741 0.730243 16.0122 0.742242 15.7502C0.754853 15.4757 0.767662 15.2012 0.780452 14.9267C0.801942 14.465 0.823307 14.0033 0.844584 13.5417C0.866412 13.0681 0.888291 12.5945 0.910252 12.1209C0.911601 12.0918 0.91295 12.0627 0.914339 12.0327C0.929103 11.7144 0.94388 11.396 0.958663 11.0776C0.962601 10.9928 0.966539 10.908 0.970477 10.8232C0.974367 10.7394 0.978257 10.6556 0.982147 10.5719C0.997293 10.2456 1.01239 9.91929 1.02743 9.593C1.03685 9.38893 1.04629 9.18486 1.05573 8.98079C1.06007 8.88687 1.0644 8.79294 1.06871 8.69901C1.08007 8.45177 1.09162 8.20454 1.10359 7.95732C1.10719 7.88282 1.11074 7.80831 1.11425 7.7338C1.11919 7.62968 1.12439 7.52557 1.12968 7.42146C1.13107 7.3914 1.13246 7.36134 1.13389 7.33037C1.16778 6.68922 1.40113 6.1806 1.86693 5.73995C2.18456 5.48073 2.5996 5.27074 3.01685 5.272C3.06994 5.272 3.06994 5.272 3.1241 5.27201C3.18082 5.27233 3.18082 5.27233 3.23869 5.27267C3.2777 5.27273 3.31672 5.27279 3.35692 5.27285C3.48133 5.27308 3.60574 5.27361 3.73015 5.27415C3.81459 5.27436 3.89902 5.27455 3.98345 5.27472C4.19026 5.27519 4.39706 5.27591 4.60387 5.27678C4.60255 5.23681 4.60255 5.23681 4.6012 5.19604C4.56691 3.99627 4.8014 2.94779 5.64601 2.0491C5.70517 1.98763 5.76506 1.92687 5.82497 1.86613C5.87504 1.81524 5.87504 1.81524 5.92612 1.76333C6.42983 1.28141 7.02496 1.03035 7.67767 0.813457C7.71594 0.798598 7.75421 0.783739 7.79365 0.76843C7.95524 0.722093 8.10663 0.71637 8.27325 0.716578ZM6.75132 2.9609C6.72521 2.98571 6.6991 3.01051 6.6722 3.03607C6.34622 3.36789 6.08737 3.8871 6.0355 4.35043C6.031 4.38294 6.02649 4.41545 6.02185 4.44895C5.98788 4.72825 5.9934 4.99203 5.9934 5.27678C7.77199 5.27678 9.55058 5.27678 11.3831 5.27678C11.3831 4.34783 11.2383 3.56794 10.5699 2.88459C10.3656 2.68896 10.1628 2.53833 9.90933 2.41352C9.86992 2.39408 9.83052 2.37465 9.78992 2.35463C8.74115 1.87842 7.53846 2.13858 6.75132 2.9609ZM2.7117 6.91894C2.57343 7.12006 2.57073 7.30177 2.55868 7.53828C2.55653 7.57779 2.55439 7.61731 2.55218 7.65801C2.54479 7.79582 2.53769 7.93363 2.5306 8.07145C2.528 8.12102 2.5254 8.17059 2.52272 8.22166C2.42765 10.0335 2.34481 11.8459 2.25979 13.6582C2.24028 14.0737 2.22061 14.4892 2.2009 14.9047C2.18166 15.3104 2.16254 15.7162 2.1435 16.1219C2.13223 16.3621 2.12091 16.6024 2.10947 16.8426C2.0988 17.067 2.08827 17.2914 2.07785 17.5157C2.07403 17.5974 2.07016 17.6791 2.06624 17.7608C2.05445 18.0066 2.04393 18.2524 2.03536 18.4983C2.0336 18.5447 2.0336 18.5447 2.03181 18.5921C2.02882 18.6787 2.02681 18.7653 2.02517 18.8519C2.02404 18.8999 2.0229 18.9478 2.02173 18.9972C2.04019 19.177 2.10293 19.3166 2.22336 19.4518C2.419 19.607 2.54846 19.6404 2.79335 19.6407C2.85738 19.641 2.85738 19.641 2.92271 19.6412C2.96953 19.6412 3.01635 19.6412 3.06459 19.6411C3.11439 19.6412 3.16419 19.6414 3.2155 19.6415C3.35378 19.6418 3.49205 19.6419 3.63032 19.6419C3.77944 19.642 3.92855 19.6423 4.07767 19.6426C4.40373 19.6432 4.7298 19.6434 5.05587 19.6436C5.25946 19.6437 5.46305 19.6439 5.66663 19.6441C6.2303 19.6446 6.79397 19.6451 7.35765 19.6452C7.39372 19.6452 7.42979 19.6452 7.46696 19.6452C7.50312 19.6452 7.53928 19.6452 7.57653 19.6453C7.6498 19.6453 7.72308 19.6453 7.79635 19.6453C7.8327 19.6453 7.86904 19.6453 7.90649 19.6453C8.4955 19.6455 9.08452 19.6462 9.67353 19.6472C10.2782 19.6482 10.883 19.6487 11.4877 19.6488C11.8272 19.6488 12.1667 19.6491 12.5063 19.6498C12.7954 19.6505 13.0845 19.6507 13.3736 19.6504C13.5211 19.6502 13.6685 19.6502 13.816 19.6508C13.976 19.6514 14.1359 19.6511 14.2958 19.6507C14.3656 19.6512 14.3656 19.6512 14.4369 19.6517C14.714 19.6499 14.9432 19.634 15.1618 19.4457C15.5316 18.9561 15.3232 18.0293 15.2954 17.4465C15.2905 17.3411 15.2856 17.2358 15.2807 17.1305C15.2688 16.8754 15.2567 16.6204 15.2446 16.3654C15.2305 16.0677 15.2166 15.77 15.2026 15.4723C15.1777 14.9407 15.1527 14.4092 15.1275 13.8776C15.1032 13.3631 15.079 12.8487 15.0549 12.3342C15.0534 12.3025 15.0519 12.2708 15.0504 12.2381C15.0489 12.2065 15.0474 12.1748 15.0459 12.1422C15.0183 11.5545 14.9907 10.9669 14.963 10.3792C14.9533 10.1722 14.9436 9.96526 14.9339 9.75829C14.9208 9.4792 14.9076 9.20011 14.8944 8.92103C14.8895 8.81896 14.8847 8.71688 14.8799 8.6148C14.8676 8.35218 14.855 8.08958 14.8414 7.82702C14.8379 7.75824 14.8344 7.68945 14.831 7.62066C14.8269 7.53747 14.8221 7.45431 14.8173 7.37116C14.8138 7.30669 14.8138 7.30669 14.8101 7.24092C14.784 7.0632 14.7141 6.91611 14.5832 6.79262C14.3515 6.64276 14.1454 6.64849 13.8788 6.65026C13.8105 6.64997 13.8105 6.64997 13.7408 6.64967C13.5882 6.64916 13.4355 6.64956 13.2829 6.64996C13.1735 6.64979 13.0641 6.64956 12.9546 6.64929C12.6882 6.64873 12.4219 6.64885 12.1555 6.64921C11.9389 6.6495 11.7223 6.64954 11.5058 6.6494C11.4749 6.64938 11.4441 6.64936 11.4123 6.64934C11.3497 6.6493 11.287 6.64926 11.2244 6.64922C10.637 6.64886 10.0496 6.64927 9.46223 6.64995C8.95852 6.65052 8.45482 6.65042 7.95112 6.64983C7.36595 6.64916 6.78078 6.64889 6.19561 6.64928C6.13317 6.64932 6.07073 6.64936 6.00829 6.6494C5.97756 6.64942 5.94684 6.64944 5.91519 6.64946C5.699 6.64957 5.4828 6.64938 5.26661 6.64909C4.97539 6.64869 4.68419 6.64897 4.39298 6.6497C4.28611 6.64987 4.17924 6.64982 4.07237 6.64954C3.92646 6.6492 3.78057 6.64963 3.63466 6.65026C3.5924 6.64998 3.55013 6.6497 3.50659 6.64941C3.2057 6.65193 2.92102 6.67859 2.7117 6.91894Z" fill="#676767"/>
                                                                                <path d="M5.81966 8.15049C6.03841 8.31323 6.10398 8.54538 6.17493 8.79788C6.38593 9.4978 6.77959 10.0271 7.41791 10.3877C8.13458 10.7536 8.89577 10.7799 9.65927 10.5374C10.329 10.2811 10.8261 9.79853 11.1304 9.15052C11.1897 8.98853 11.2423 8.82452 11.2897 8.65866C11.3623 8.41526 11.4557 8.22996 11.676 8.08618C11.9162 8.00071 12.1089 7.99318 12.348 8.08766C12.5368 8.18345 12.6459 8.28412 12.7304 8.47681C12.8328 9.15652 12.4828 9.86089 12.0998 10.4058C12.0183 10.5098 11.9335 10.6094 11.8462 10.7085C11.8173 10.7434 11.7883 10.7784 11.7585 10.8144C11.134 11.5481 10.2251 12.0011 9.27768 12.1401C7.94579 12.2217 6.88158 11.9313 5.86703 11.0453C5.61561 10.8224 5.42441 10.5643 5.23542 10.2874C5.20221 10.2403 5.20221 10.2403 5.16832 10.1922C4.89307 9.77272 4.58748 9.11522 4.64593 8.60314C4.7092 8.36678 4.83375 8.2284 5.0341 8.09407C5.28864 7.96401 5.58468 7.99184 5.81966 8.15049Z" fill="#5B5B5B"/>
                                                                        </svg>   
                                                                </li>
                                                        </ul>
                                                </div> 
                                        </div>
                                </div>
                        </div>
                </div> 
        </div>




        <section class="side-menu-section  main-menu-component">
                <!-- <button  
                        class="btn  btn-primary"
                        id="sidebar-toggle"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebar-offcanvas"
                        aria-controls="offcanvasScrolling">  Sidebar
                </button> -->


                <div  
                        class="sidebar-component  offcanvas  offcanvas-start"
                        data-bs-scroll="true"
                        data-bs-backdrop="false"
                        tabindex="-1" 
                        id="sidebar-offcanvas"
                        aria-labelledby="offcanvasScrollingLabel">



                        <div  accordion-button="offcanvas-header"  class="offcanvas-header" >
                                <button  
                                        id="sidebar-close-btn"
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close">
                                </button>
                        </div>



                        <div class="offcanvas-body">
                                <div class="container-side-menu">
                                        <button  
                                                id="shop-toggle"
                                                class="btn  btn-primary"
                                                type="button"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#shop-offcanvas"
                                                aria-controls="offcanvasScrolling">  SHOP
                                        </button>  
                                </div>


                                <div class="container-side-menu">
                                        <button  
                                                id="about-toggle"
                                                class="btn  btn-primary"
                                                type="button">  <a>NEW</a>
                                        </button>
                                </div>

                                <div class="container-side-menu">
                                        <button  
                                                id="about-toggle"
                                                class="btn  btn-primary"
                                                type="button">  <a>BESTSELLERS</a>
                                        </button>
                                </div>

                                <div class="container-side-menu">
                                        <button  
                                                id="about-toggle"
                                                class="btn  btn-primary"
                                                type="button"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#about-offcanvas"
                                                aria-controls="offcanvasScrolling">  ABOUT
                                        </button>
                                </div>
                        </div>

                </div>
        </section>


        <!-- 
        <section class="side-menu-section  main-menu-component">
                <button  
                        class="btn  btn-primary"
                        id="sidebar-toggle"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#sidebar-offcanvas"
                        aria-controls="offcanvasScrolling">  Sidebar
                </button>


                <div  
                        class="sidebar-component  offcanvas  offcanvas-start"
                        data-bs-scroll="true"
                        data-bs-backdrop="false"
                        tabindex="-1" 
                        id="sidebar-offcanvas"
                        aria-labelledby="offcanvasScrollingLabel">



                        <div  accordion-button="offcanvas-header"  class="offcanvas-header" >
                                <button  
                                        id="sidebar-close-btn"
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close">
                                </button>
                        </div>



                        <div class="offcanvas-body">
                                <div class="container">
                                        <button  
                                                id="shop-toggle"
                                                class="btn  btn-primary"
                                                type="button"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#shop-offcanvas"
                                                aria-controls="offcanvasScrolling">  Shop
                                        </button>  
                                </div>


                                <div class="container">
                                        <button  
                                                id="about-toggle"
                                                class="btn  btn-primary"
                                                type="button"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#about-offcanvas"
                                                aria-controls="offcanvasScrolling">  about
                                        </button>
                                </div>
                        </div>

                </div>
        </section> 
        -->


        <section class="about-section  sub-offcanvas">
                <!-- <button  
                        class="btn  btn-primary"
                        type="button"
                        data-bs-toggle="offcanvas"      
                        data-bs-target="#about-offcanvas"
                        aria-controls="offcanvasScrolling">  about
                </button> -->


                <div  
                        class="sub-menu-component  offcanvas  offcanvas-start"
                        data-bs-scroll="true"
                        data-bs-backdrop="false"
                        tabindex="-1" 
                        id="about-offcanvas"
                        aria-labelledby="offcanvasScrollingLabel">


                        <div class="offcanvas-header">
                                <!-- <button  
                                        id="about-close-btn"
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close">
                                </button> -->
                        </div>
                        



                        <div class="offcanvas-body">
                                <!-- <div class="accordion"  id="accordionPanelsStayOpenExample">


                                        <div class="accordion-item   border-bottom">
                                                <h2 class="accordion-header">
                                                        ANUA story
                                                </h2>
                                        </div>


                                        <div class="accordion-item   border-bottom">
                                                <h2 class="accordion-header">
                                                        Our Ingredients
                                                </h2>
                                        </div>
        
        
                                        <div class="accordion-item   border-bottom">
                                                <h2 class="accordion-header">
                                                        <button 
                                                                class="accordion-button collapsed" 
                                                                type="button" 
                                                                data-bs-toggle="collapse" 
                                                                data-bs-target="#panelsStayOpen-collapseThree" 
                                                                aria-expanded="false" 
                                                                aria-controls="panelsStayOpen-collapseThree">  By Ingredients
                                                        </button>
                                                </h2>



                                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                                        <div class="accordion-body">
                                                                <ul  class="accordion-list">
                                                                        <li  class="accordion-item"><a href="#">  Heartleaf (Houttuynia Cordata)  </a></li>
                                                                        <li  class="accordion-item"><a href="#">  Niacinamide  </a></li>
                                                                        <li  class="accordion-item"><a href="#">  Hyaluronic  </a></li>
                                                                        <li  class="accordion-item"><a href="#">  Panthenol  </a></li>
                                                                        <li  class="accordion-item"><a href="#">  Vitamin C  </a></li>
                                                                        <li  class="accordion-item"><a href="#">  Centella </a></li>
                                                                        <li  class="accordion-item"><a href="#">  AHA BHA PHA </a></li>
                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>
                                </div> -->
                        


                                <!-- <div class="offcanvas-component  border-bottom">
                                        <a href="#">All</a>
                                </div> -->


                                <div class="accordion"  id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item   border-bottom">
                                                <h2 class="accordion-header">
                                                        <button 
                                                                class="accordion-static-button">  ANUA story
                                                        </button>
                                                </h2>
                                        </div>


                                        <div class="accordion-item   border-bottom">
                                                <h2 class="accordion-header">
                                                        <button 
                                                                class="accordion-static-button">  Our Ingredients
                                                        </button>
                                                </h2>
                                        </div>
                                </div>
                        
                        
                        </div>
                </div>
        </section>


        <section class="shop-menu-section  sub-offcanvas">
                <div  
                        class="sub-menu-component  offcanvas  offcanvas-start"
                        data-bs-scroll="true"
                        data-bs-backdrop="false"
                        tabindex="-1" 
                        id="shop-offcanvas"
                        aria-labelledby="offcanvasScrollingLabel">


                        <div class="offcanvas-header">
                                <!-- <button  
                                id="shop-close-btn"
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close">
                                </button> -->
                        </div>
                



                        <div class="offcanvas-body">
                                <div class="offcanvas-component  border-bottom">
                                        <a href="#">All</a>
                                </div>


                                <div class="accordion"  id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item   border-bottom">
                                                <h2 class="accordion-header">
                                                <button 
                                                        class="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#panelsStayOpen-collapseOne"
                                                        aria-expanded="true"
                                                        aria-controls="panelsStayOpen-collapseOne">  By Category
                                                </button>
                                                </h2>


                                                

                                                <div  id="panelsStayOpen-collapseOne"  class="accordion-collapse collapse show">
                                                        <div class="accordion-body">
                                                                <ul>
                                                                <li><a href="#">  Cleanser  </a></li>
                                                                <li><a href="#">  Toner  </a></li>
                                                                <li><a href="#">  Serum  </a></li>
                                                                <li><a href="#">  Moisturizer  </a></li>
                                                                <li><a href="#">  Sheet Mask  </a></li>
                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>


                                        <div class="accordion-item   border-bottom">
                                                

                        
                                                <h2 class="accordion-header">
                                                <button 
                                                        class="accordion-button collapsed"
                                                        type="button" 
                                                        data-bs-toggle="collapse" 
                                                        data-bs-target="#panelsStayOpen-collapseTwo" 
                                                        aria-expanded="false" 
                                                        aria-controls="panelsStayOpen-collapseTwo">  By Skin Concern
                                                </button>
                                                </h2>



                                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                                <div class="accordion-body">
                                                        <ul class="accordion-list">
                                                        <li class="accordion-item"><a href="#">  Acne  </a></li>
                                                        <li class="accordion-item"><a href="#">  Blackhead  </a></li>
                                                        <li class="accordion-item"><a href="#">  Dark Spot Care  </a></li>
                                                        <li class="accordion-item"><a href="#">  Dryness  </a></li>
                                                        <li class="accordion-item"><a href="#">  Dullness Mask  </a></li>
                                                        <li class="accordion-item"><a href="#">  Soothing & Calming </a></li>
                                                        </ul>
                                                </div>
                                                </div>
                                        </div>


                                        <div class="accordion-item   border-bottom">



                                                <h2 class="accordion-header">
                                                <button 
                        class="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#panelsStayOpen-collapseThree" 
                        aria-expanded="false" 
                        aria-controls="panelsStayOpen-collapseThree">  By Ingredients
                                                </button>
                                                </h2>



                                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                                <div class="accordion-body">
                                                        <ul  class="accordion-list">
                                                        <li  class="accordion-item"><a href="#">  Heartleaf (Houttuynia Cordata)  </a></li>
                                                        <li  class="accordion-item"><a href="#">  Niacinamide  </a></li>
                                                        <li  class="accordion-item"><a href="#">  Hyaluronic  </a></li>
                                                        <li  class="accordion-item"><a href="#">  Panthenol  </a></li>
                                                        <li  class="accordion-item"><a href="#">  Vitamin C  </a></li>
                                                        <li  class="accordion-item"><a href="#">  Centella </a></li>
                                                        <li  class="accordion-item"><a href="#">  AHA BHA PHA </a></li>
                                                        </ul>
                                                </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
    </header>
    <link rel="stylesheet" href="./navbar.scss" />
`;
class PopupNotify extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: "open"
        });
        const content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);
    }
}
window.customElements.define("navbar-component", PopupNotify);

//# sourceMappingURL=experiment.e92adff9.js.map
