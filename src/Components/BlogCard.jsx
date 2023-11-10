import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function BlogCard({ img, h1, p }) {
  return (
    <Card sx={{ maxWidth: 300 }} className="shadow-2xl">
      <img
        className="h-48 w-full hover:scale-105 transition-transform"
        alt="green iguana"
        src={img}
      />
      <CardContent>
        <h1 className="my-4 text-xl text-gray-500 font-semibold">
          {h1}
        </h1>
        <p >
          {p}
        </p>
      </CardContent>
      <CardActions>
        <button className="text-yellow-500 text-sm font-bold">Read More &gt;</button>
      </CardActions>
    </Card>
  );
}
