import { connect } from 'react-redux'
import { setFilter, removeFilter } from "../reducers/filterReducer"

const Filter = (props) => {
    const style = {
        marginTop: "20px",
        paddingLeft: "25px",
        paddingTop: "25px",
        color: "#FFF",
        background: "#7C130B",
    }

    const filterChange = (event) => {
      const filterText = event.target.value
      props.setFilter(filterText)
    }

    return (
      <div style={style}>
        Filter <input id="listfilter" name="filter" onChange={filterChange} />
        <button style={{ backgroundColor: "red", color: "#FFF" }} onClick={props.removeFilter}>Clear</button>
      </div>
    )
  }

  const mapStateToProps = (state) => {
    return {
      filter: state.filter
    }
  }

  const mapDispatchToProps = {
    setFilter,
    removeFilter,
  }
  
  const ConnectedFilter = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Filter)
  
  export default ConnectedFilter



