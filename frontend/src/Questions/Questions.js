import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Questions(){
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const fetchQuestions = async () =>{
      const result = await axios(
        'http://localhost:8081/',
      );
      setQuestions(result.data);
    };
    fetchQuestions();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Link to="/new-question" className="col-sm-12 col-md-4 col-lg-3">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Need help? Ask here!</div>
              <div className="card-body">
                <h4 className="card-title">+ New Question</h4>
                <p className="card-text">Don't worry. Help is on the way!</p>
              </div>
            </div>
          </Link>
        {questions === null && <p>Loading questions...</p>}
        {
          questions && questions.map(question => (
            <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
              <Link to={`/question/${question.id}`}>
                <div className="card text-white bg-success mb-3">
                  <div className="card-header">Answers: {question.answers}</div>
                  <div className="card-body">
                    <h4 className="card-title">{question.title}</h4>
                    <p className="card-text">{question.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Questions;
