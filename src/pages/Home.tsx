import React, { useState } from 'react';
import { Box, Typography, Button, Container, Paper, Avatar, Rating, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Link as RouterLink } from 'react-router-dom';

const GALLERY_PHOTOS = [
  {
    id: 1,
    title: 'Morning Chambal River Boat Cruise',
    category: 'Boat Safari',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200&auto=format&fit=crop',
    description: 'Drifting along the serene Chambal River in our silent safari boat as dawn breaks over Ranthambore Sanctuary.'
  },
  {
    id: 2,
    title: 'Mugger Crocodile & Gharial Habitat',
    category: 'River Predators',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop',
    description: 'A close encounter with basking marsh crocodiles and endangered fish-eating gharials along the sandy river banks.'
  },
  {
    id: 3,
    title: 'Wild Bengal Tiger by the Water Edge',
    category: 'Tiger Trail',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
    description: 'A magnificent wild tiger spotted quenching its thirst along the river bank during an afternoon safari.'
  },
  {
    id: 4,
    title: 'Kingfisher & River Avian Life',
    category: 'Bird Watching',
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1200&auto=format&fit=crop',
    description: 'Exotic kingfishers, Indian skimmers, and migratory waterbirds resting on branches overhanging the Chambal water.'
  },
  {
    id: 5,
    title: 'Chambal River Canyon & Sunset Expedition',
    category: 'Sunset Cruise',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop',
    description: 'Breathtaking sunset colors illuminating the high river gorges and tranquil sanctuary waters.'
  },
  {
    id: 6,
    title: 'Wildlife Water Hole Sightings',
    category: 'Sanctuary Flora & Fauna',
    image: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1200&auto=format&fit=crop',
    description: 'Spotting deer, chinkara, and elusive wild animals coming down to drink at the pristine river banks.'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Wildlife Photographer',
    location: 'New Delhi',
    avatar: 'RS',
    rating: 5,
    quote: 'An extraordinary perspective of Ranthambore! We spotted mugger crocodiles and rare bird species right along the Chambal river banks. The boat captain was exceptionally skilled and silent.'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Travel Enthusiast',
    location: 'London, UK',
    avatar: 'SJ',
    rating: 5,
    quote: 'The morning boat safari was the absolute highlight of our trip. Floating peacefully while watching kingfishers and wildlife with our expert guide made it a truly memorable experience.'
  },
  {
    id: 3,
    name: 'Vikramaditya Singh',
    role: 'Nature Lover',
    location: 'Jaipur, India',
    avatar: 'VS',
    rating: 5,
    quote: 'Superbly managed boat safari. The booking process was smooth, safety gear was top-notch, and the pristine river views away from the noisy crowds were breathtaking.'
  }
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_PHOTOS[0] | null>(null);

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        p: 3,
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{
            fontWeight: 700,
            mb: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            '@media (max-width:600px)': { fontSize: '2.5rem' }
          }}>
            Explore Ranthambore from the Water
          </Typography>
          <Typography variant="h5" sx={{
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}>
            Experience the thrill of Ranthambore National Park with our exclusive boat safaris. 
            Witness tigers and exotic wildlife from a unique perspective.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            component={RouterLink} 
            to="/booking"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: 1,
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none', backgroundColor: '#333' }
            }}
          >
            Book Your Safari
          </Button>
        </Container>
      </Box>
      
      {/* The Experience Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: 'text.primary', mb: 6 }}>
          The Experience
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6 }}>
          {/* Feature 1 */}
          <Box sx={{ flex: '1 1 300px', textAlign: 'left' }}>
            <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ borderBottom: '2px solid', borderColor: 'secondary.main', display: 'inline-block', mb: 2 }}>
              Unique Perspective
            </Typography>
            <Typography color="text.secondary">
              Observe aquatic wildlife and shore-dwelling animals from the water, offering a quiet and non-intrusive way to explore the park.
            </Typography>
          </Box>
          {/* Feature 2 */}
          <Box sx={{ flex: '1 1 300px', textAlign: 'left' }}>
            <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ borderBottom: '2px solid', borderColor: 'secondary.main', display: 'inline-block', mb: 2 }}>
              Expert Naturalists
            </Typography>
            <Typography color="text.secondary">
              Our guides are seasoned experts who provide deep insights into the ecosystem and help you spot elusive wildlife.
            </Typography>
          </Box>
          {/* Feature 3 */}
          <Box sx={{ flex: '1 1 300px', textAlign: 'left' }}>
            <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ borderBottom: '2px solid', borderColor: 'secondary.main', display: 'inline-block', mb: 2 }}>
              Safety First
            </Typography>
            <Typography color="text.secondary">
              Modern vessels equipped with comprehensive safety equipment ensure a secure and comfortable journey for all ages.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Boat Safari Photo Gallery Section */}
      <Box sx={{ bgcolor: '#f9f9f9', borderTop: '1px solid', borderColor: 'divider', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="secondary" align="center" sx={{ display: 'block', fontWeight: 'bold', mb: 1, letterSpacing: '0.1em' }}>
            SAFARI HIGHLIGHTS
          </Typography>
          <Typography variant="h3" align="center" gutterBottom sx={{ color: 'text.primary', mb: 2 }}>
            Boat Safari Photo Gallery
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 7, maxWidth: '650px', mx: 'auto' }}>
            Take a glance at recent real moments captured during our Chambal River boat safaris around Ranthambore National Park.
          </Typography>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3.5
          }}>
            {GALLERY_PHOTOS.map((photo) => (
              <Paper
                key={photo.id}
                elevation={0}
                onClick={() => setSelectedPhoto(photo)}
                sx={{
                  borderRadius: 1.5,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: '#fff',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                    '& .photo-overlay': { opacity: 1 },
                    '& img': { transform: 'scale(1.05)' }
                  }
                }}
              >
                <Box sx={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                  <Box
                    component="img"
                    src={photo.image}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <Box
                    className="photo-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(0,0,0,0.35)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box sx={{ bgcolor: 'rgba(255,255,255,0.9)', borderRadius: '50%', p: 1.5 }}>
                      <ZoomInIcon sx={{ color: '#1a1a1a', fontSize: 28 }} />
                    </Box>
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      bgcolor: 'rgba(26,26,26,0.85)',
                      color: '#fff',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {photo.category}
                  </Typography>
                </Box>

                <Box sx={{ p: 2.5 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
                    {photo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {photo.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Photo Detail Modal Lightbox */}
      <Dialog
        open={Boolean(selectedPhoto)}
        onClose={() => setSelectedPhoto(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: 2, overflow: 'hidden' } }}
      >
        {selectedPhoto && (
          <Box sx={{ position: 'relative', bgcolor: '#fff' }}>
            <IconButton
              onClick={() => setSelectedPhoto(null)}
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                bgcolor: 'rgba(0,0,0,0.6)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
                zIndex: 2,
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box sx={{ maxHeight: '60vh', overflow: 'hidden', bgcolor: '#000', display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                sx={{ width: '100%', maxHeight: '60vh', objectFit: 'contain' }}
              />
            </Box>

            <DialogContent sx={{ p: 3.5 }}>
              <Typography variant="caption" color="secondary" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {selectedPhoto.category} • Ranthambore Boat Safari
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700, mt: 0.5, mb: 1.5 }}>
                {selectedPhoto.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {selectedPhoto.description}
              </Typography>
            </DialogContent>
          </Box>
        )}
      </Dialog>

      {/* Testimonials Grid Section */}
      <Box sx={{ borderTop: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" color="secondary" align="center" sx={{ display: 'block', fontWeight: 'bold', mb: 1, letterSpacing: '0.1em' }}>
            GUEST REVIEWS
          </Typography>
          <Typography variant="h3" align="center" gutterBottom sx={{ color: 'text.primary', mb: 2 }}>
            What Our Guests Say
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: '600px', mx: 'auto' }}>
            Real experiences shared by wildlife enthusiasts and travelers who explored Ranthambore with us.
          </Typography>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4
          }}>
            {TESTIMONIALS.map((t) => (
              <Paper
                key={t.id}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  bgcolor: '#ffffff',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  }
                }}
              >
                <Box>
                  <Rating value={t.rating} readOnly size="small" sx={{ mb: 2.5, color: '#1a1a1a' }} />
                  <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7, fontStyle: 'italic', mb: 3 }}>
                    "{t.quote}"
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 2, borderTop: '1px solid', borderColor: 'grey.100' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', color: '#fff', width: 42, height: 42, fontSize: '0.95rem', fontWeight: 600 }}>
                    {t.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                      {t.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      {t.role} • {t.location}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
