import React, { Component } from "react";
import RedirectWrapper from "../../components/RedirectWrapper/RedirectWrapper";
import BooksCards from "../../components/BooksCards/BooksCards";
import styles from "./HomePage.module.scss";

const testData = [
  {
    id: 0,
    title: "someBook",
    author: "someOne",
    year: "2022",
    genre: "Detective",
    imageId: null,
  },
];

class HomePage extends Component {
  state = {
    booksData: [],
    redirectData: {
      path: "",
      isRedirect: false,
      payload: null,
    },
  };

  componentDidMount() {
    this.uploadData();
  }

  async uploadData() {
    this.setState({ booksData: testData });
  }

  render() {
    return (
      <RedirectWrapper
        path={this.state.redirectData.path}
        isRedirect={this.state.redirectData.isRedirect}
      >
        <div className={styles.container}>
          <BooksCards booksData={this.state.booksData} />
        </div>
      </RedirectWrapper>
    );
  }
}

export default HomePage;
