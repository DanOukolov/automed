import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const navItems = ["", "triage"];

const Header = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar style={{ background: "white", padding: 5, boxShadow: "none" }}>
        <Toolbar>
          <svg
            width="75"
            height="75"
            viewBox="0 0 131 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M122.718 40H65.5V46.5H121.157L122.198 47L123.238 48.5L123.758 77L123.238 78L121.677 79.5H106.593V80V85.5H121.677H124.278L125.839 84.5L127.919 83L129.48 81L130 79V49V47L128.96 45L127.399 43L125.319 41.5L122.718 40Z"
              fill="#9F73D7"
              stroke="#9F73D7"
            />
            <path
              d="M89.4273 63H82.6652V63.5V79V101.5V110.5V116V117L81.1048 119H50.9354L49.3749 118.5L48.3346 117.5L47.8144 116.5V102.5H41.5725V113.5V118L42.6128 120.5L44.1733 122L45.7338 123.5L48.3346 125H81.1048L84.2257 124L87.3467 121.5L88.387 120L88.9072 118.5L89.4273 117.5V63Z"
              fill="#9F73D7"
              stroke="#9F73D7"
            />
            <path
              d="M41.5725 8.5V63H48.3346V11V9.5L49.3749 8.5L50.4153 7.5H80.0644L81.6249 8L82.6652 9.5L83.1854 23.5H89.4273L89.1673 8.5L88.9072 7L88.387 5.5L86.8265 4L84.2257 2L82.6652 1H49.3749L46.254 2.5L43.6532 4L42.6128 6L42.0927 7.5L41.5725 8.5Z"
              fill="#736AAC"
              stroke="#736AAC"
            />
            <path
              d="M1 78.5V46.75L1.5 45L2.25 44L3 43L4.5 41.5L5 41L6 40.5L7 40H16.5H24.4073V40.5V46.5H10.3629L8.80242 47L7.7621 48.5V76.5V78.5L8.80242 79.5H65.5V86H8.80242H7.7621L6.20161 85.5L5.16129 85L4.12097 84L3.60081 83.5L3.08065 83L2.56048 82.5L2.04032 81.5L1.52016 80.5L1 79.5V78.5Z"
              fill="#736AAC"
              stroke="#736AAC"
            />
          </svg>

          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#9F73D7",
              fontWeight: 500,
              marginLeft: 2,
            }}
          >
            AutoMed
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={`/${item}`}>
                <Button key={item} sx={{ color: "#9F73D7" }}>
                  {item === "" ? "Home" : item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
