import styled  from 'styled-components';

export const ContactSection = styled.div`
    padding: 50px 0;
    text-align: center
`;
export const Title = styled.h2`
    padding: 50px 0;
    text-align: center
`;

export const Span = styled.span`
    font-weight: normal
`;
export const Form = styled.form`
    width: 70%;
    margin: auto;
`;

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`;
export const FormInput = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`;

.drop form .form-input {
    overflow: hidden
}

.drop form .form-input input {
    width: 49%;
}

.drop form .form-input input[type=text] {
    float: left
}

.drop form .form-input input[type=email] {
    float: right
}

.drop form input.sub {
    width: 100%;
}

.drop form textarea {
    width: 100%;
    outline: 0;
    background: #ccc
}

.drop form input[type=submit] {
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
}

@media (max-width:575px) {
.drop .drop-title {
        font-size: 40px
    }

.drop form .form-input input {
        width: 100%
    }

.drop form {
        width: 90%
    }
}
