/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/7.svg';
import icon2 from 'assets/images/features/8.svg';
import icon3 from 'assets/images/features/9.svg';
import icon4 from 'assets/images/features/11.svg';
import icon5 from 'assets/images/features/10.svg';
import icon6 from 'assets/images/features/12.svg';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Residential waste & Recycling Pickup',
    description: `Waste and recycling solutions for your home.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Bagster - Dumpster in a bag',
    description: `A convenient solution to handle any job too big for your normal trash service.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Temporary Dumpster Rental',
    description: `We have a variety of roll-off dumpster sizes for any project.`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Bulbs,Battteries and Electonics',
    description: `Convenient home collection or mail-in recycling service for bulbs, batteries and electronics.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Large Truck Pickup',
    description: `Convenient pickup options for large items like appliances and furniture or just multiple bulky items.`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Household Hazardous Waste',
    description: `Waste Management has the expertise and tools needed to take care of waste that might be hazardous to your household and the environment, the right way. `,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="we are at your service with reliable trash collection & sustainable waste management "
          title="Services For Your Home"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
