import React from "react";
import botLogo from "../../assets/images/bot.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <img src={botLogo} className="h-8" alt="botLogo" />
      <p className="text-[26px] font-bold">PermBots</p>
    </div>
  );
};

export default Header;
