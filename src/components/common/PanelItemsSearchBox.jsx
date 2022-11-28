import React from "react";
import { Input } from "@mui/material";
import cards from "../StudentPanel/PanelDashbord/PanelDashbord.module.css";

const PanelItemsSearchBox = ({ value, onChange }) => {
  return (
    <div>
      <Input
        inputProps={{ className: cards["my-s-input-place"] }}
        onChange={onChange}
        value={value}
        className={cards["my-s-input"]}
        color="success"
        placeholder="جستجو :"
        type="text"
      />
    </div>
  );
};

export default PanelItemsSearchBox;
