const mongoose = require('mongoose');
//스키마 정의
const contactSchema = new mongoose.Schema(
    {
        name : {type:String,
                required : true
        },
        email : {type:String
        },
        phone : {type:String,
                required :[true, '전화번호는 꼭 쓰세요']
        }
    },
    {
        timestamps : true
    }
);

//스카마 => 모델
//mongoose.model(모델명-대문자로...., 스키마명)
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;