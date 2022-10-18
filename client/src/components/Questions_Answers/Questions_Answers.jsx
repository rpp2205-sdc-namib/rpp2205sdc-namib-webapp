import React from 'react';
import Search from './Search.jsx';
import ModalWindow from './ModalWindow.jsx';
import axios from 'axios';
import QA from './QA.jsx';

// this class is top-level component for Questions_Answers

class Questions_Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QAs: [], // all Q&A for the current product
      filteredQAs: [],
      viewMoreQuestions: false,
      isFormShown: false,
      searchWord: '',
    }

    this.sortQuestionsByHelpfulness = this.sortQuestionsByHelpfulness.bind(this);
    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.getTop2Questions = this.getTop2Questions.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.handleViewMoreQuestions = this.handleViewMoreQuestions.bind(this);
  }

  async componentDidMount() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    return axios.get(`/qa/questions/${this.props.productId}`)
    .then(data => {
      let sortedQAs = this.sortQuestionsByHelpfulness(data.data.results)
      this.setState({
        QAs: sortedQAs
      });
    })
  }

  sortQuestionsByHelpfulness(data) {
    return data.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness
    });
  }

  getTop2Questions(data) {
    data.splice(2);
    return data;
  }

  handleAddQuestion() {
    this.setState({
      isFormShown: true
    });
  }

  handleViewMoreQuestions() {
    this.setState({
      viewMoreQuestions: true
    });
  }

  closeForm() {
    this.setState({
      isFormShown: false
    });
  }

  handleChangeSearch(value) {
    // if (value.length < 3) return;

    this.setState({
      searchWord: value,
      filteredQAs: this.filterSearch(this.state.QAs)
    });
  }

  filterSearch(data) {
    let results = data.filter(question => {
      return question.question_body.includes(this.state.searchWord);
    });
    return results;
  }

  render() {
    return (
      <div>
        <Search handleChangeSearch={this.handleChangeSearch} />
        {this.state.searchWord.length < 2 ? this.state.QAs.map((qa, index) => {
          if (index > 1) return;
          return (
            <QA qa={qa} productName={this.props.productName} />
          );
        }) : this.state.filteredQAs.map(qa => <QA qa={qa} productName={this.props.productName} />)}
        {this.state.viewMoreQuestions && this.state.QAs.map((qa, index) => {
          if (index < 2) return;
          return (
            <QA qa={qa} productName={this.props.productName} />
          )
        })}
        {this.state.QAs.length > 2 && <button onClick={this.handleViewMoreQuestions}>More answered questions</button>}
        <button onClick={this.handleAddQuestion}>Add Question</button>
        {this.state.isFormShown &&
          <ModalWindow
            productName={this.props.productName}
            closeForm={this.closeForm}/>
        }
      </div>
    )
  }
}

export default Questions_Answers;