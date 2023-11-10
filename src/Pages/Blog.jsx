import React from "react";
import BlogCard from "../Components/BlogCard";
import { Box, Grid } from "@mui/material";

const Blog = () => {
  const blogObj = [
    {
      img: "./android.jpg",
      h1: "Android 13 trucker hat fashion",
      p: "Android 13 trucker hat is one such trend that has made its way to fashion trends of 2022 and is here to stay. Anime fashion",
    },
    {
      img: "./business.jpg",
      h1: "Is Business Services A Good Career Path?",
      p: "So you’re thinking about a career in business services? That’s great! But is business services a good career path for you? Business services is a",
    },
    {
      img: "./guide.jpg",
      h1: "Guide On How To Join The Goth Clique In Bitlife",
      p: "Do you want to know more about How To Join The Goth Clique In Bitlife? Are you looking to join this niche clique in the",
    },
    {
      img: "./tips.jpg",
      h1: "3 Tips To Become A Better Digital Marketer",
      p: "There are many steps to becoming a better Digital Marketeer. You need to be able to work with different tools, know the audiences that you",
    },
    {
      img: "./dev.jpg",
      h1: "Treating Modern Software Development Complex Issues",
      p: "Modern Software Development Complex issues can be treated with many aspects involved. Even the smallest tasks require organizing, planning, and scheduling. However, here is the",
    },
    {
      img: "./product.jpg",
      h1: "Enhance Your Product With Typography Art",
      p: "If you have a battle for the attention of your target audience, it’s time to put your Typography Art to work. Typography design is more",
    },
    {
      img: "./Ideas.jpg",
      h1: "Ideas and Inspiration For Modern Logo Design",
      p: "A Modern Logo Design is the face of a brand and can make or break a company. We have seen logos go from plain text",
    },
    {
      img: "./graphics.jpg",
      h1: "Understanding The Background Of Abstract Graphics",
      p: "It is a known fact that Abstract Graphics holds a significant place in the history of art. If you are looking to create a website",
    },
    {
      img: "./template.jpg",
      h1: "4 Basics To Help Grow Your Business With PPC Proposal Template",
      p: "A (Pay Per Click) PPC Proposal Template is a great way to get new customers or increase returns on your current product pages. A good",
    },
    {
      img: "./mistakes.jpg",
      h1: "Common Mistakes In Ecommerce Website Development And How To Prevent Them",
      p: "An Ecommerce Website Development is the backbone of an online business that enjoys success. This is because it allows you to reach out to more customers on",
    },
    {
      img: "./traffic.jpg",
      h1: "Marketing Strategies Social Media For Increasing Traffic And Being No. 1",
      p: 'The internet has a lot of potential Marketing Strategies Social Media to promote your business but it is still not easy to get noticed. The'
    },
    {
      img: "./no1.jpg",
      h1: "Be The No. 1 Website With Most Traffic",
      p: 'Want to be the Website With Most Traffic? Have you ever wondered how some websites have more traffic than others even though they have the'
    },
  ];
  return (
    <div className="mt-32 max-w-[1500px] px-[5%]">
      <Box className="px-5 my-5">
        <Grid container columnSpacing={2} rowSpacing={2}>
          {blogObj.length &&
            blogObj.map((blogObj, index) => {
              return (
                <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                  <BlogCard img={blogObj.img} h1={blogObj.h1} p={blogObj.p} />
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default Blog;
