const mongoose = require('mongoose');
//스키마 정의
const userSchema = new mongoose.Schema(
    {
        username : {type:String,
                   required : true,
                   unique:true
        },
        password : {type:String,
                    required : true
        },
    },
    {
        timestamps : true
    }
);

//스카마 => 모델
//mongoose.model(모델명-대문자로...., 스키마명)
const User = mongoose.model("User", userSchema);

module.exports = User;