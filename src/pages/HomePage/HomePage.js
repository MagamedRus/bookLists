import React, { Component } from "react";
import RedirectWrapper from "../../components/RedirectWrapper/RedirectWrapper";
import BooksCards from "../../components/BooksCards/BooksCards";
import NewBookModal from "../../components/NewBookModal/NewBookModal";
import styles from "./HomePage.module.scss";
import { newBookPath } from "../../constants/routePath";
import { getAllBooks } from "../../controllers/book";

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
    const booksData = getAllBooks();
    this.setState({ booksData: booksData });
  }

  goToCreateBook = (payload) => {
    this.setState({
      redirectData: {
        payload: { newBook: payload },
        path: newBookPath,
        isRedirect: true,
      },
    });
  };

  render() {
    const redirData = this.state.redirectData;
    return (
      <RedirectWrapper
        path={redirData.path}
        isRedirect={redirData.isRedirect}
        state={redirData.payload}
      >
        <div className={styles.container}>
          <NewBookModal goNext={this.goToCreateBook} />
          <BooksCards booksData={this.state.booksData} />
        </div>
      </RedirectWrapper>
    );
  }
}

export default HomePage;
