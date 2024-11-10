// ServicePage.jsx
import React from 'react';
import './services.css'; // Import the CSS file for styling

const services = () => {
  return (
    <Container maxWidth="lg" className="service-page">
      {/* Services Provided by UTS */}
      <Typography variant="h4" align="center" gutterBottom className="section-title">
        SERVICES PROVIDED BY UTS
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={4} justifyContent="center">
        {['Media', 'ORM', 'SEO', 'Start-up Experience', 'Tech Based', 'Teams'].map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="service-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>{service}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Placeholder text, replace with actual descriptions */}
                  Description for {service}.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Company Info Section */}
      <Box className="company-info">
        <Box className="company-info-text">
          <Typography variant="h5" gutterBottom className="section-subtitle">
            ABOUT OUR COMPANY
          </Typography>
          <Typography variant="body1" gutterBottom>
            Mapping Adventures, Making Moments
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Our state-of-the-art marketing management tools are designed to optimize every single brand attribute...
          </Typography>
          <Button variant="contained" color="primary" className="expert-button">
            Talk To An Expert
          </Button>
          <Typography variant="body1" className="contact-number">
            +91-8960257106
          </Typography>
        </Box>

        {/* Image Section */}
        <Box className="company-images">
          {/* Placeholder images, replace src with actual image paths */}
          <img src="https://via.placeholder.com/100" alt="Image 1" className="company-image" />
          <img src="https://via.placeholder.com/100" alt="Image 2" className="company-image" />
          <img src="https://via.placeholder.com/100" alt="Image 3" className="company-image" />
        </Box>
      </Box>
    </Container>
  );
};

export default services;
