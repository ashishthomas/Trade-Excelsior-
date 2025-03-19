import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { Info, Logout, PersonTwoTone } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "15px",
});

const StyledAppbar = styled(AppBar)({
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  color: "inherit",
  zIndex: 1200,
  boxShadow: "none",
  padding: "5px ",
});

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e0e0e0",
  padding: "8px",
  borderRadius: "30px",
  cursor: "pointer",
  [theme.breakpoints.down(320)]: {
    padding: "4px",
  },
}));

const UserMenu = ({ anchorEl, setAnchorEl }) => (
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={() => setAnchorEl(null)}
  >
    <MenuItem onClick={() => setAnchorEl(null)} sx={{ mb: 1.5 }}>
      <PersonTwoTone sx={{ mr: 1 }} /> My Profile
    </MenuItem>
    <MenuItem onClick={() => setAnchorEl(null)}>
      <Logout sx={{ mr: 1 }} /> Logout
    </MenuItem>
  </Menu>
);

const Navbar = ({ toggleSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down(320));

  return (
    <StyledAppbar>
      <StyledToolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* MenuIcon - Hidden on Mobile */}
          {!isMobile && (
            <MenuIcon
              onClick={toggleSidebar}
              sx={{
                cursor: "pointer",
                mr: 2,
                fontSize: isExtraSmall ? "18px" : "24px",
              }}
            />
          )}
          <Typography
            variant="h6"
            sx={{
              fontSize: isExtraSmall ? "14px" : isMobile ? "18px" : "24px",
              mr: isMobile ? 2 : 0, // Added margin-right for mobile view
            }}
          >
            Excelsior
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: isExtraSmall ? "5px" : isMobile ? "6px" : "10px",
          }}
        >
          {/* Subscription Button - Responsive */}
          <Button
            variant="outlined"
            color="primary"
            sx={{
              padding: isExtraSmall
                ? "4px 4px"
                : isMobile
                ? "6px 6px"
                : "12px 24px",
              fontSize: isExtraSmall ? "10px" : isMobile ? "12px" : "16px",
              minWidth: isExtraSmall ? "100px" : isMobile ? "140px" : "260px",
              textTransform: "none",
            }}
          >
            <Info
              sx={{
                mr: 1,
                fontSize: isExtraSmall ? "12px" : isMobile ? "14px" : "16px",
              }}
            />
            Subscription ends in 365 days
          </Button>

          {/* User Avatar and Settings */}
          <StyledBox onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Avatar
              sx={{
                fontSize: isExtraSmall ? "12px" : isMobile ? "14px" : "16px",
                width: isExtraSmall ? 24 : isMobile ? 30 : 32,
                height: isExtraSmall ? 24 : isMobile ? 30 : 32,
              }}
            >
              M
            </Avatar>
            <Badge color="error">
              <SettingsIcon
                color="primary"
                sx={{
                  fontSize: isExtraSmall ? "14px" : isMobile ? "16px" : "20px",
                }}
              />
            </Badge>
          </StyledBox>

          <UserMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Box>
      </StyledToolbar>
    </StyledAppbar>
  );
};

export default Navbar;