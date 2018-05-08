import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            stars: 5,
            author: 'nag@email.com',
            body: ''
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let { onNewReview } = this.props;
        let newReview = {
            stars: this.state.stars,
            author: this.state.author,
            body: this.state.body
        }
        onNewReview(newReview);
        this.toggleForm();
    }
    handleChange(e) {
        let fieldId = e.target.id;
        let fieldValue = e.target.value;
        if (fieldId === 'stars') {
            fieldValue = Number.parseInt(fieldValue, 10);
        }
        this.setState({ [fieldId]: fieldValue });
    }
    disableBtn(stars) {
        if (stars !== 5) return true;
        else return false;
    }
    renderForm() {
        let { isOpen, stars, author, body } = this.state;
        if (!isOpen) {
            return (
                <button className="btn btn-info" onClick={() => { this.toggleForm() }}>
                    <i className="fa fa-plus"></i>
                </button>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-header"> Review Form</div>
                    <div className="card-body">
                        <form onSubmit={(e) => { this.handleFormSubmit(e) }}>
                            <div className="form-group">
                                <label>stars</label>
                                <select className="form-control" id="stars" onChange={(e) => { this.handleChange(e) }} value={stars}>
                                    {
                                        [1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)
                                    }
                                </select>
                                <div className="help-block">{this.state.stars < 5 ? 'give me 5 stars' : ''}</div>
                            </div>
                            <div className="form-group">
                                <label>author</label>
                                <input className="form-control" id="author" onChange={(e) => { this.handleChange(e) }} value={author} />
                            </div>
                            <div className="form-group">
                                <label>body</label>
                                <textarea className="form-control" id="body" onChange={(e) => { this.handleChange(e) }} value={body}></textarea>
                            </div>
                            <button disabled={this.disableBtn(stars)} className="btn btn-primary">submit</button>
                            <button type="button" className="btn btn-danger" onClick={() => { this.toggleForm() }}>cancel</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-7">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;