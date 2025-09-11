import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { blogBlurbs } from "../Blog/assets/blogData";
import { BlogCategory } from "../Blog/assets/blogData";

export default function FreeSolo() {
  const options = BlogCategory.map((option) => {
    const firstLetter = option.text[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Stack
      spacing={2}
      sx={{
        width: "27vw",
        "@media (max-width: 600px)": {
          width: "85vw",
        },
      }}
    >
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={blogBlurbs.map((option) => option.header)}
        renderInput={(params) => <TextField {...params} label="Search Post" />}
      />

      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.text}
        sx={{
          width: "27vw",
          "@media (max-width: 600px)": {
            width: "85vw",
          },
        }}
        renderInput={(params) => <TextField {...params} label="Categories" />}
      />
    </Stack>
  );
}

