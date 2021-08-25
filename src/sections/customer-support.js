/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'components/image';
import support from 'assets/images/1.png';

const list = [
  'FaQs',
  'Product & Services',
  'Service Questions',
  'Account',
];

const CustomerSupport = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <Image src={support} loading="lazy" alt="support" />
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Customer support is our main priority with their hundred percent
              satisfaction.
            </Heading>
            <Text as="p" sx={styles.summary}>
            We’re dedicated to providing best-in-class service and making your life a little easier. Have a question? Visit our support center or start a chat with a Waste Management representative.
            </Text>

            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: 'primary', mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerSupport;

const styles = {
  section: {
    pt: [8, null, 12, 6, null, 15],
    pb: [null, null, null, 8, 0],
  },
  grid: {
    gap: [null, null, null, null, 2],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, '470px 1fr', '1fr 549px'],
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, -4],
    img: {
      width:[480],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, 'none'],
    margin: [null, null, null, '0 auto', 'unset'],
    textAlign: ['center', null, null, null, 'left'],
  },
  title: {
    color: 'headingSecondary',
    fontFamily: 'headingAlt',
    fontSize: [4, null, null, 8, null, null, 11],
    fontWeight: 500,
    lineHeight: [1.33, null, 1.4, 1.53],
    letterSpacing: ['-0.5px', null, null, '-1px'],
    mb: 3,
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'link',
    fontSize: ['13px', null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 200px)'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'link',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
};
