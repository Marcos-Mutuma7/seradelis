/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx ,Heading ,Image} from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logo.png';


export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={logo} sx={styles.image} alt="startup landing logo" />

    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    width:[90, 120],
    

  },
};