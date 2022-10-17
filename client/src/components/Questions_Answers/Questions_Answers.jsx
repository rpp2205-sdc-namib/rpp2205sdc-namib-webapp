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
      isFormShown: false
      // question_id_1: '',
      // question_id_2: '',
      // top2Questions: [],
      // allAnswersForFirstQuestion: [],
      // allAnswersForSecondQuestion: [],
      // top2AnswersForFirstQuestion: [],
      // top2AnswersForSecondQuestion: [],
      // hasMoreThanTwoQuestions: false,
      // isQuestionFormShown: false,
      // isAnswerFormShown: false,
      // whichForm: '',
      // searchWord: '',
      // filtered: [],
      // isSearched: false
    }

    this.sortQuestionsByHelpfulness = this.sortQuestionsByHelpfulness.bind(this);
    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.closeForm = this.closeForm.bind(this);
    // this.handleAddAnswer = this.handleAddAnswer.bind(this);
    // this.getAnswersForSpecificQuestionId = this.getAnswersForSpecificQuestionId.bind(this);
    // this.handleShowMoreQuestions = this.handleShowMoreQuestions.bind(this);
    // this.handleAddQuestion = this.handleAddQuestion.bind(this);
    // this.handleAddAnswer = this.handleAddAnswer.bind(this);
    // this.closeForm = this.closeForm.bind(this);
    // this.handleChangeSearch = this.handleChangeSearch.bind(this);
    // this.filterSearch = this.filterSearch.bind(this);
  }

  async componentDidMount() {
    // get all questions
    this.getAllQuestions();
    // this.getAllQuestions(() => {
    //   this.getAnswersForSpecificQuestionId(this.state.question_id_1, 1, () => {
    //     if (this.state.question_id_2) {
    //       this.getAnswersForSpecificQuestionId(this.state.question_id_2, 2, null)
    //     }
    //   })
    // })
  }

  // componentDidUpdate() {
  //   if (this.state.filtered.length) {
  //     this.getAnswersForSpecificQuestionId(this.state.filtered[0].question_id, 1, () => {
  //       if (this.state.filtered[1] !== undefined) {
  //         this.getAnswersForSpecificQuestionId(this.state.filtered[1].question_id, 2, null)
  //       }
  //     })
  //   }
  // }


  getAllQuestions(callback) {
    return axios.get(`/qa/questions/${this.props.productId}`)
    .then(data => {
      let sortedQAs = this.sortQuestionsByHelpfulness(data.data.results)
      this.setState({
        QAs: sortedQAs
      });
    })
    // return axios.get(`/qa/questions/${this.props.productId}`)
    // .then(data => {
    //   var results = data.data.results;
    //   this.setState({
    //     QAs: results,
    //     top2Questions: (results.length < 2) ? [results[0]] : [results[0], results[1]],
    //     question_id_1: results[0] ? results[0].question_id : null,
    //     question_id_2: results[1] ? results[1].question_id : null,
    //     hasMoreThanTwoQuestions: results.length > 2
    //   }, callback)
    // })
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

  // getAnswersForSpecificQuestionId(questionId, index, callback) {
  //   return axios.get(`/qa/questions/${questionId}/answers`)
  //   .then(data => {
  //     var results = data.data.results;
  //     if (index === 1) {
  //       this.setState({
  //         allAnswersForFirstQuestion: results,
  //         top2AnswersForFirstQuestion: (results.length < 2) ? [results[0]] : [results[0], results[1]]
  //       }, callback)
  //     } else {
  //       this.setState({
  //         allAnswersForSecondQuestion: results,
  //         top2AnswersForSecondQuestion: (results.length < 2) ? [results[0]] : [results[0], results[1]]
  //       }, callback)
  //     }
  //   })
  // }

  // handleShowMoreQuestions() {
  //   // show up to 2 additional questions
  // }

  handleAddQuestion() {
    // allows user to create a new question for the product
    // opens modal window
    this.setState({
      isFormShown: true
    });
  }

  closeForm() {
    this.setState({
      isFormShown: false
    });
  }

  // handleAddAnswer() {
  //   this.setState({
  //     whichForm: 'answer',
  //     isAnswerFormShown: true
  //   });
  // }

  // closeForm() {
  //   this.setState({
  //     isQuestionFormShown: false,
  //     isAnswerFormShown: false,
  //   });
  // }

  // handleChangeSearch(value) {
  //   // begin search after a user types more than 3 characters
  //   if (value.length < 3) return;

  //   this.setState({
  //     searchWord: value
  //   }, this.filterSearch);
  // }

  // filterSearch() {
  //   let results = this.state.QAs.filter(question => {
  //     return question.question_body.includes(this.state.searchWord);
  //   });

  //   this.setState({
  //     isSearched: true,
  //     filtered: results
  //   })
  // }

  render() {
    return (
      <div>
        {this.getTop2Questions(this.state.QAs).map(qa => (
          <QA qa={qa} handleAddAnswer={this.handleAddAnswer} productName={this.props.productName} />
        ))}
        <button onClick={this.handleAddQuestion}>Add Question</button>
        {this.state.isFormShown &&
          <ModalWindow
            productName={this.props.productName}
            closeForm={this.closeForm}/>
        }
      </div>
    )
  }

  // render() {
  //   console.log('filtered: ', this.state.QAs)
  //   return (
  //     <div>
  //       <Search handleChangeSearch={this.handleChangeSearch} />
  //       {this.state.isSearched ?
  //         <div>
  //           {this.state.filtered.map((qa) => {
  //             return (
  //               <div>
  //                 <Question
  //                   isSearched={this.state.isSearched}
  //                   question={qa}
  //                   handleAddAnswer={this.handleAddAnswer}
  //                   isAnswerFormShown={this.state.isAnswerFormShown}
  //                   productName={this.props.productName}
  //                   whichForm={this.state.whichForm}
  //                   closeForm={this.closeForm} />
  //                   <Answers />
  //               </div>
  //             )
  //         })}
  //         </div> :
  //         <div>
  //           {this.state.top2Questions.map((qa, index) => {
  //             if (index === 0) {
  //               return (
  //                 <div key={qa.question_id}>
  //                 <Question
  //                   isSearched={this.state.isSearched}
  //                   question={qa}
  //                   handleAddAnswer={this.handleAddAnswer}
  //                   isAnswerFormShown={this.state.isAnswerFormShown}
  //                   productName={this.props.productName}
  //                   whichForm={this.state.whichForm}
  //                   closeForm={this.closeForm} />
  //                 {this.state.top2AnswersForFirstQuestion.length &&
  //                  <Answers
  //                     allAnswersForFirstQuestion={this.state.allAnswersForFirstQuestion} />}
  //                 </div>
  //               )
  //             } else {
  //               return (
  //                 <div key={qa.question_id}>
  //                 <Question
  //                   isSearched={this.state.isSearched}
  //                   question={qa}
  //                   handleAddAnswer={this.handleAddAnswer}
  //                   isAnswerFormShown={this.state.isAnswerFormShown}
  //                   productName={this.props.productName}
  //                   whichForm={this.state.whichForm}/>
  //                 {this.state.top2AnswersForSecondQuestion.length &&
  //                   <Answers
  //                     allAnswersForSecondQuestion={this.state.allAnswersForSecondQuestion} />
  //               }
  //                 </div>
  //               )
  //             }
  //             <button onClick={this.handleAddQuestion}>Add Question</button>
  //             {this.state.isQuestionFormShown &&
  //               <ModalWindow
  //                 closeForm={this.closeForm}
  //                 productName={this.props.productName}
  //                 whichForm={this.state.whichForm}
  //               />}
  //             })}
  //         </div>
  //       }
  //     </div>
  //   )
  // }
}

export default Questions_Answers;