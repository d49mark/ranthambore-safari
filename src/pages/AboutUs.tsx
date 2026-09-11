import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Dialog, DialogContent, IconButton, Button, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link as RouterLink } from 'react-router-dom';

const BLOG_ARTICLES = [
  {
    id: 'chambal-safari-guide',
    title: 'The Ultimate Guide to Chambal River Boat Safaris in Ranthambore',
    category: 'Safari Guide',
    date: 'July 24, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Discover why a water safari along the Chambal River offers a tranquil and rare perspective of Ranthambore National Park wild sanctuary.',
    content: `
      <p>While jeep and cantor safaris are famous across Ranthambore National Park, a boat safari along the nearby Chambal River sanctuary delivers an entirely different, serene, and intimate wilderness adventure.</p>
      
      <h3>Why Choose a Water Safari?</h3>
      <p>Boat safaris eliminate the noise of heavy vehicles, allowing boats to glide silently past riverbanks where crocodiles bask in the sun and rare avian species rest undisturbed. It provides unprecedented opportunities for wildlife photography without distressing the animals.</p>
      
      <h3>Best Times for Sighting</h3>
      <p>Early morning safaris (6:00 AM - 9:30 AM) offer crisp lighting and maximum bird activity, while late afternoon routes (2:30 PM - 6:00 PM) showcase spectacular golden-hour reflections and active aquatic predators.</p>
      
      <h3>What You Will See</h3>
      <p>From critically endangered Fish-eating Gharials and Marsh Crocodiles to Indian Skimmers, Black-bellied Terns, and wild ungulates drinking at the water edge, every trip brings unexpected encounters.</p>
    `
  },
  {
    id: 'crocodiles-and-gharials',
    title: 'Spotting Muggers & Gharials: Ranthambore River Predators',
    category: 'Wildlife Species',
    date: 'June 18, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Learn about the fascinating distinction between Mugger Crocodiles and long-snouted Gharials inhabiting Ranthambore river corridors.',
    content: `
      <p>The pristine Chambal river ecosystem bordering Ranthambore is one of the last remaining strongholds for the endangered Fish-eating Gharial (Gavialis gangeticus) alongside the robust Mugger Crocodile.</p>

      <h3>Gharial vs. Mugger Crocodile</h3>
      <p>Gharials feature long, slender snouts specially evolved for catching fish with swift precision. In contrast, Mugger crocodiles possess broader, heavier jaws capable of ambushing larger land animals near shoreline edges.</p>

      <h3>Conservation Success Story</h3>
      <p>Thanks to strict marine sanctuary protections, breeding colonies along these riverbanks have rebounded significantly, offering visitors front-row views of prehistoric reptiles in their natural habitat.</p>
    `
  },
  {
    id: 'boat-photography-tips',
    title: 'Essential Wildlife Photography Tips for River Boat Safaris',
    category: 'Photography',
    date: 'May 30, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Master shutter speed, beanbag stabilization, and lighting angles to capture crisp wildlife shots from a floating boat.',
    content: `
      <p>Photographing wildlife from a moving water vessel requires subtle technique shifts compared to land-based safaris.</p>

      <h3>1. High Shutter Speeds are Key</h3>
      <p>Because the boat sways gently on water currents, keep your shutter speed at 1/1000s or faster to prevent motion blur when zooming with telephoto lenses.</p>

      <h3>2. Stabilize Without Heavy Tripods</h3>
      <p>Tripods transmit engine vibration. Instead, use a compact beanbag resting on the boat rail or hand-hold with optical image stabilization enabled.</p>

      <h3>3. Low Angle Advantages</h3>
      <p>Sitting low in the boat allows eye-level perspectives with waterbirds and swimming reptiles, creating striking background bokeh and compelling artistic depth.</p>
    `
  }
];

export default function AboutUs() {
  const [activeArticle, setActiveArticle] = useState<typeof BLOG_ARTICLES[0] | null>(null);

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 8 }}>
          The Ranthambore Story
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', mb: 12 }}>
          <Box sx={{ flex: '1 1 400px' }}>
            <Box sx={{
              width: '100%',
              height: '500px',
              borderRadius: 1,
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              },
            }}>
              <img 
                src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2070&auto=format&fit=crop" 
                alt="Ranthambore Boat Safari" 
                referrerPolicy="no-referrer"
              />
            </Box>
          </Box>
          <Box sx={{ flex: '1 1 400px' }}>
            <Typography variant="overline" color="secondary" sx={{ fontWeight: 'bold', mb: 1, display: 'block' }}>
              Our Mission
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Preserving the Wild, One Journey at a Time
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
              Ranthambore Safari is dedicated to providing an unparalleled wildlife experience in the heart of Ranthambore National Park. Our boat safaris offer a unique vantage point to witness the park's diverse flora and fauna, including the majestic Royal Bengal Tiger.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
              We are committed to sustainable tourism and wildlife conservation. Our expert guides ensure that every safari is both educational and respectful of the natural habitat.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
              Join us for an unforgettable journey through the waters of Ranthambore, where every turn reveals a new wonder of the wild.
            </Typography>
          </Box>
        </Box>

        {/* Interactive Clickable Blog Section */}
        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 10 }}>
          <Typography variant="overline" color="secondary" align="center" sx={{ display: 'block', fontWeight: 'bold', mb: 1, letterSpacing: '0.1em' }}>
            WILDLIFE JOURNAL & NEWS
          </Typography>
          <Typography variant="h3" align="center" gutterBottom sx={{ color: 'text.primary', mb: 2 }}>
            Latest Safari Blog Posts
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 7, maxWidth: '650px', mx: 'auto' }}>
            Explore our curated articles on Ranthambore river ecosystems, photography guides, and wildlife conservation news. Click any article below to read.
          </Typography>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4
          }}>
            {BLOG_ARTICLES.map((article) => (
              <Paper
                key={article.id}
                elevation={0}
                onClick={() => setActiveArticle(article)}
                sx={{
                  borderRadius: 1.5,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#ffffff',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.06)',
                    '& .blog-title': { color: 'secondary.main' }
                  }
                }}
              >
                <Box sx={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <Box
                    component="img"
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Chip
                    label={article.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      bgcolor: 'rgba(26,26,26,0.85)',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.75rem'
                    }}
                  />
                </Box>
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'text.secondary', fontSize: '0.8rem', mb: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarTodayIcon sx={{ fontSize: 14 }} />
                      <span>{article.date}</span>
                    </Box>
                    <span>•</span>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTimeIcon sx={{ fontSize: 14 }} />
                      <span>{article.readTime}</span>
                    </Box>
                  </Box>
                  
                  <Typography variant="h6" className="blog-title" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.35, transition: 'color 0.2s' }}>
                    {article.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                    {article.excerpt}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main', fontWeight: 600, fontSize: '0.9rem' }}>
                    <span>Read Full Article</span>
                    <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Blog Article Full View Modal */}
      <Dialog
        open={Boolean(activeArticle)}
        onClose={() => setActiveArticle(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: 2, overflow: 'hidden' } }}
      >
        {activeArticle && (
          <Box sx={{ bgcolor: '#fff', position: 'relative' }}>
            <IconButton
              onClick={() => setActiveArticle(null)}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                bgcolor: 'rgba(0,0,0,0.6)',
                color: '#fff',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
                zIndex: 3
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box sx={{ height: 350, position: 'relative', overflow: 'hidden' }}>
              <Box
                component="img"
                src={activeArticle.image}
                alt={activeArticle.title}
                referrerPolicy="no-referrer"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
            </Box>

            <DialogContent sx={{ p: { xs: 3, md: 5 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Chip label={activeArticle.category} color="secondary" size="small" sx={{ fontWeight: 600 }} />
                <Typography variant="caption" color="text.secondary">
                  {activeArticle.date} • {activeArticle.readTime}
                </Typography>
              </Box>

              <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
                {activeArticle.title}
              </Typography>

              <Box
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  '& h3': { fontSize: '1.35rem', fontWeight: 700, mt: 3, mb: 1.5, color: 'primary.main' },
                  '& p': { mb: 2 }
                }}
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
              />

              <Box sx={{ mt: 5, p: 3, bgcolor: '#f9f9f9', borderRadius: 1.5, border: '1px solid', borderColor: 'divider', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Ready to experience Chambal River?</Typography>
                  <Typography variant="body2" color="text.secondary">Book your spot for an upcoming morning or evening boat safari.</Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  component={RouterLink}
                  to="/booking"
                  onClick={() => setActiveArticle(null)}
                  sx={{ px: 3, py: 1, textTransform: 'none', fontWeight: 600 }}
                >
                  Book Safari Now
                </Button>
              </Box>
            </DialogContent>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
