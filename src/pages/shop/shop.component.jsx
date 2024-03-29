import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import CollectionPage from "../collection/collection.component";
import CollectionOverview from "./../../components/collection-overview/collection-overview.component";
import { updateCollections } from './../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
