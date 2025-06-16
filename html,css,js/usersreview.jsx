import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Button,
} from '@mui/material';
const reviews = [
  {
    id: 1,
    name: 'Jeya Chithra',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    date: '2025-06-11',
    comment:
      'I ve purchased garments from several textile manufacturers in India, and the quality of cotton and dyeing from XYZ Textiles is unmatched. The fabric feels premium, holds color after multiple washes'},
  {
    id: 2,
    name: 'Jhanani',
    avatar: 'https://i.pravatar.cc/150?img',
    rating: 5,
    date: '2025-05-18',
    comment:
     'Working with textile suppliers in Tiruppur has been a good experience. They were able to deliver custom-dyed fabrics for my collection with precision.'
  },
  {
    id: 3,
    name: 'Junia Rodha Sharan',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 4,
    date: '2025-08-12',
    comment:
      'So glad to see more textile producers offering organic cotton and bamboo fabrics! I ordered sustainable textiles from a brand that partners with certified mills, and the feel was luxurious'
  },
  {
    id: 4,
    name: 'Shree Dharshini',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 4,
    date: '2024-08-15',
    comment:
      'The Make a Product feature is a standout. It simplifies the entire process of product creation.',
  },
  {
    id: 5,
    name: 'Amirtha Varshini',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 4,
    date: '2024-08-15',
    comment: 'Textile has revolutionized how we approach the textile market.',
  },
];
export default function UserReviewsPage() {
  return (
    <Box sx={{ width:'100%',height:'100vh',bgcolor: '#f6f4ff', py: 6, px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="primary"
        gutterBottom
      >
        550+ Reviews from Industry Leaders
      </Typography>
      <Typography align="center" mb={4}>
        10,000+ users already using our services.
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} mb={4}>
        <Button variant="contained" color="warning">
          Get a free trial
        </Button>
        <Button variant="outlined" color="warning">
          Read more reviews
        </Button>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                height: '100%',
                bgcolor: 'white',
                maxWidth:'400px',
                textAlign:'justify'
              }}
            >
              <CardContent>
                 <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar src={review.avatar} alt={review.name} />
                  <Box>
                    <Typography variant="subtitle2">{review.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {review.role}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  “{review.comment}”
                </Typography>
               <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                  <Rating value={review.rating} readOnly size="small" />
                  <Typography variant="caption" color="text.secondary">
                    {review.date}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
