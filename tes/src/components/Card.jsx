import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const BasicCard = () => {
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const getAPI = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  React.useEffect(() => {
    getAPI();
  }, []);

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {users.length > 0 ? (
          users.map((user) => (
            <React.Fragment key={user.id}>
              <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={user.avatar}
                  title={`${user.first_name} ${user.last_name}`}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    {user.first_name} {user.last_name}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                    {user.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleOpen(user)}>
                    Lihat Detail
                  </Button>
                </CardActions>
              </Card>
            </React.Fragment>
          ))
        ) : (
          <p>No users to display.</p>
        )}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedUser?.first_name} {selectedUser?.last_name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Email: {selectedUser?.email}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Tutup</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BasicCard;