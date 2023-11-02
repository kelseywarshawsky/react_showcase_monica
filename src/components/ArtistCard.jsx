import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function ArtistCard({ title, url }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      {url !== undefined ? (
        <CardMedia sx={{ height: 140 }} image={url} title={title} />
      ) : (
        <></>
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
