import './style.css';
import Icon from './previewIcon.svg';


const BtnPreview = ({link}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={Icon} alt="" />
      Preview
    </a>
  );
};

export default BtnPreview;
