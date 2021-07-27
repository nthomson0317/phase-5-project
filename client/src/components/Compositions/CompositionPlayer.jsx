import React from 'react'
import {connect} from 'react-redux'

 function CompositionPlayer(props) {
    return (
        <div>
            <iframe src={`https://open.spotify.com/embed/track/${props.currentComposition}`} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

let mapStateToProps = (globalState) => {
    return {
        currentComposition: globalState.currentCompositionInfo.currentComposition
    }
  }
  export default connect(mapStateToProps)(CompositionPlayer) 
