import ContentLoader from 'react-content-loader';
import themes from 'Styles/Themes';
import styled from 'styled-components';

const Loader = styled(ContentLoader).attrs(props => ({
  speed: 1.5,
  foregroundColor:
    props.theme === themes.light ? props.theme.bg : props.theme.color,
  backgroundColor: props.theme.shadowColor,
}))`
  width: 100%;
  height: 100%;
`;

export default Loader;
