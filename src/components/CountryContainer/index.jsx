import PropTypes from "prop-types";

const Country = ({ countryName }) => (
  <div className="flex flex-row w-full h-full flex-wrap">
    <span className="text-white font-bold text-9xl justify-center">
      {countryName}
    </span>
  </div>
);

Country.propTypes = {
  countryName: PropTypes.string,
};

export default Country;
