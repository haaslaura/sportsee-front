/**
 * Loader Component
 * Displays a loading animation during data fetching or processing
 *
 * @component
 * @returns {JSX.Element}
 */
function Loader () {

    return (
        <div className="loader-container">
          <div className="loader-dual-ring"></div>
        </div>
    )
}

export default Loader