import { Box, useMediaQuery } from "@mui/material";
import Navbar from "pages/navbar/Navbar";
import UserWidget from "pages/widgets/UserWidget";
import MyPostWidget from "pages/widgets/MyPostWidget";
import React from "react";
import { useSelector } from "react-redux";
import PostsWidget from "pages/widgets/PostsWidget";
import AdvertWidget from "pages/widgets/AdvertWidget";
import FriendListWidget from "pages/widgets/FriendListWidget";
import AdvertWidget2 from "pages/widgets/AdvertWidget2";
import AdvertWidget3 from "pages/widgets/AdvertWidget3";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
          {isNonMobileScreens && (<Box mt="2rem">
          <AdvertWidget2/>
          </Box>)}
        </Box>
       

        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath}/>
          <PostsWidget userId={_id}/>
        </Box>
        {isNonMobileScreens && (<Box flexBasis="26%">
          <AdvertWidget/>
          <Box mt="2rem"><AdvertWidget3/></Box>
          
          <Box m="2rem 0"/>
          <FriendListWidget userId={_id}/>
          </Box>)}
      </Box>
    </Box>
  );
};

export default Home;
