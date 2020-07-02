<template>
    <div class="container">
        <div class="login-group">
            <div class="title">
                <h1 style="color: #f2f2f2;font-weight: bold;">系统登录</h1>
            </div>

            <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-form">
                <el-form-item label-width="0" prop="username">
                    <el-input prefix-icon="el-icon-user" v-model="form.username" placeholder="账号" />
                </el-form-item>

                <el-form-item label-width="0" prop="password">
                    <el-input type="password" prefix-icon="el-icon-lock" v-model="form.password" placeholder="密码" />
                </el-form-item>

                <el-button type="primary" @click="login('form')" style="width: 100%;">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                form: { username: '', password: '' },
                rules: {
                    username: [
                        {required: true, message: '请输入用户账号', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入用户密码', trigger: 'blur'},
                    ]
                }
            }
        },
        methods: {
            login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        margin: 0;
        padding: 0;
        width:100%;
        height: 100%;
        position: absolute;
        background: #2D3A4B;
        text-align: center;
    }
    .title {
        margin-top: 150px;
        margin-bottom: 30px;
    }
    .login-group {
        position: relative;
        width: 450px;
        max-width: 100%;
        margin: 0 auto;
    }

    /deep/ .login-form {
        .el-input, .el-input--prefix {
            .el-input__inner {
                height: 50px;
                padding: 12px 20px 12px 30px;
                color: #f2f2f2;
                background: #283443;
                border-color: #384351;
            }
        }
    }
</style>
