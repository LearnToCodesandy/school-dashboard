import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import SettingsInputAntennaRoundedIcon from "@mui/icons-material/SettingsInputAntennaRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="logo__container">
        <svg
          width="60"
          height="48"
          viewBox="0 0 60 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="48" rx="8" fill="#FFBF3F" />
          <path
            d="M26.8333 26.2667L28.0333 22.4333L24.8666 19.9667H28.7333L30 16L31.2333 19.9667H35.1333L31.9666 22.4333L33.1333 26.2667L30 23.9L26.8333 26.2667ZM22.1333 38.6667V28.5333C21.1333 27.4889 20.4166 26.3444 19.9833 25.1C19.55 23.8555 19.3333 22.6 19.3333 21.3333C19.3333 18.3111 20.3555 15.7778 22.4 13.7333C24.4444 11.6889 26.9778 10.6667 30 10.6667C33.0222 10.6667 35.5555 11.6889 37.6 13.7333C39.6444 15.7778 40.6666 18.3111 40.6666 21.3333C40.6666 22.6 40.45 23.8555 40.0166 25.1C39.5833 26.3444 38.8666 27.4889 37.8666 28.5333V38.6667L30 36.0333L22.1333 38.6667ZM30 30C32.4222 30 34.4722 29.1611 36.15 27.4833C37.8277 25.8055 38.6666 23.7555 38.6666 21.3333C38.6666 18.9111 37.8277 16.8611 36.15 15.1833C34.4722 13.5055 32.4222 12.6667 30 12.6667C27.5778 12.6667 25.5278 13.5055 23.85 15.1833C22.1722 16.8611 21.3333 18.9111 21.3333 21.3333C21.3333 23.7555 22.1722 25.8055 23.85 27.4833C25.5278 29.1611 27.5778 30 30 30ZM24.1333 35.8667L30 34.0333L35.8666 35.8667V30.1667C34.9777 30.8111 34.0222 31.2778 33 31.5667C31.9778 31.8555 30.9778 32 30 32C29.0222 32 28.0222 31.8555 27 31.5667C25.9778 31.2778 25.0222 30.8111 24.1333 30.1667V35.8667Z"
            fill="#333333"
            stroke="#333333"
            stroke-width="0.5"
          />
        </svg>
        <h1 className="logo__text">School Space</h1>
      </div>
      <div className="options__container">
        <div className="option">
          <div className="option__icon">
            <DashboardOutlinedIcon />
          </div>
          <p className="option__text">dashboard</p>
        </div>

        <div className="option">
          <div className="option__icon">
            <MenuBookRoundedIcon />
          </div>
          <p className="option__text">Courses</p>
        </div>

        <div className="option active">
          <div className="option__icon">
            <GroupsRoundedIcon />
          </div>
          <p className="option__text">students</p>
        </div>

        <div className="option">
          <div className="option__icon">
            <BorderColorRoundedIcon />
          </div>
          <p className="option__text">exams</p>
        </div>

        <div className="option">
          <div className="option__icon">
            <ReceiptRoundedIcon />
          </div>
          <p className="option__text">results</p>
        </div>

        <div className="option">
          <div className="option__icon">
            <SummarizeRoundedIcon />
          </div>
          <p className="option__text">notice board</p>
        </div>

        <div className="option">
          <div className="option__icon">
            <SettingsInputAntennaRoundedIcon />
          </div>
          <p className="option__text">live classes</p>
        </div>

        <div className="option">
          <div className="option__icon">
            <NotificationsNoneRoundedIcon />
          </div>
          <p className="option__text">notifications</p>
        </div>
      </div>
      <div className="user__container">
        <div className="user__img">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="user not found!"
          />
        </div>
        <div className="user__details">
          <p className="user__name">Andy Samberg</p>
          <p className="user__email">andy.samberg@gmail.com</p>
          <button className="user__profile">view profile</button>
        </div>
        <div className="user__btn"></div>
      </div>
    </div>
  );
};

export default Sidebar;
