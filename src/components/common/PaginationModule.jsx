import React from "react";
import _ from "lodash";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const themeRtl = createTheme({
  direction: "rtl",
});
const themeLtr = createTheme({
  direction: "ltr",
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const PaginationModule = ({
  itemCount,
  pageSize,
  onPageChanger,
  pageCurrent,
  itemLength,
  backColor,
}) => {
  const [direction, setDirection] = React.useState("rtl");

  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount === 1) return null;

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={direction === "rtl" ? themeRtl : themeLtr}>
        <Pagination
          count={pagesCount}
          onChange={onPageChanger}
          color={backColor}
          variant="outlined"
          shape="rounded"
          size={"small"}
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default PaginationModule;
