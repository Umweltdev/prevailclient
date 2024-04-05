import { useState, useEffect } from "react";
import { Box, Grid, Typography, Stack, CircularProgress } from "@mui/material";
import SavedCard from "./SavedCard";
// import { userRequest } from "../../requestMethods";
import Header from "./Header";
import Favorite from "@mui/icons-material/Favorite";

const SavedProperties = ({ openDrawer }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProperties = async () => {
      setLoading(true);
      try {
        const res = await userRequest.get(`users/user-saved-properties`);
        setLoading(false);
        setProperties(res.data.savedProperties);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getProperties();
  }, []);
  return (
    <Stack spacing={2}>
      <Header
        Icon={Favorite}
        title={"Saved Properties"}
        openDrawer={openDrawer}
      />
      <Box>
        {loading ? (
          <Box
            sx={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : properties.length > 0 ? (
          <Grid container spacing={3}>
            {properties?.map((p, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <SavedCard {...p} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            height="300px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5" textAlign="center" mt={4}>
              NO PROPERTY SAVED
            </Typography>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default SavedProperties;
