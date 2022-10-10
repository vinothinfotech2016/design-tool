import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { getScreenById } from "../api/api";
import { clickPaths } from "../navigation/routePaths";
import { FormTopbar } from "../shared/FormTopbar";
import ImageMapper from "react-image-mapper";

function ImageMapperPage() {
  const location = useLocation();
  const [imageSize, setImageSize] = React.useState({ width: 1100, height: 700 });
  const [imageMap, setImageMap] = React.useState([]);
  const [imageUrl, setimageUrl] = React.useState("");
  const [screen, setScreen] = React.useState({});
  const [areas, setAreas] = React.useState([]);
  const navigate = useNavigate();
  const search = location.search;
  const searchParam = new URLSearchParams(search);
  const editId = searchParam?.get("editId") || location?.state?.id;


  useEffect(() => {
    getScreenById(location?.state?.id || editId).then((res) => {
      setScreen(res.data);
      setimageUrl(res?.data?.screenImageUrl);
      setAreas(JSON.parse(res?.data?.actionItems));
    });
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      setImageSize({ width: 1100, height: 700 });
    };
  }, [location.state, editId]);

  const fetchClickedScale = (area) => {
    setimageUrl("");
    setAreas([]);
    navigate(clickPaths.USENAVIGATECHECKPAGE, {
      state: { id: area?.data?.id },
    });
  };

  useEffect(() => {
    const maps = areas?.map((area, index) => ({
      _id: index,
      shape: "rect",
      coords: [
        imageSize.width * (area.x / 100),
        imageSize.height * (area.y / 100),
        imageSize.width * ((area.x + area.width) / 100),
        imageSize.height * ((area.y + area.height) / 100),
      ],
      preFillColor: "rgba(0, 0, 0, 0.5)",
      ...area,
    }));
    setImageMap(maps);
  }, [areas.length,imageMap.length]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <FormTopbar
            label="Check Page"
            listPath={clickPaths.USENAVIGATESCREENFLOWPAGE}
          />
          <Box
            sx={{
              padding: "20px",
              marginTop: "60px",
            }}
          >
            <div style={{ padding: "20px" }}>
              {imageSize.width > 0 && (
                <ImageMapper
                  src={imageUrl}
                  onClick={fetchClickedScale}
                  map={{
                    name: "my-map",
                    areas: imageMap,
                  }}
                  height={700}
                  width={1100}
                />
              )}
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ImageMapperPage;