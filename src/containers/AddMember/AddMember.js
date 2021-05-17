import { Button, Col, Divider, Row,Switch,Typography,Form } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import {useState} from 'react';
import CircularImage from '../../components/CircularImage/CircularImage';
import InputField from '../../components/InputField/InputField';
import SelectField from '../../components/SelectField/SelectField';
import styles from './AddMember.module.css';

const {Title} = Typography;

const AddMember = (props)=>{

    const [form] = Form.useForm();
    const options = {
        userType:['New User'],
        teamRole:['Manager','Director','Data Entry'],
        locations:['Cairo','Alexandria'],
        organizationTag:['HR','Finance'],
    }

    const handleSubmit = (values)=>{
        console.log(values)
    }

    const handleChange = (event)=>{
        console.log(event);
    }

    return(
        <div className={styles.container}>
            <Form form={form} name="add-member" onFinish={handleSubmit}>
                <Row justify="space-around" align="middle">
                    <Col span={15}>
                        <Title style={{ padding:'10px' }}>Add Member</Title>
                    </Col>
                    <Col span={3}>
                        <Button style={{fontWeight:'bold'}} type="text" size="middle">Cancel</Button>
                    </Col>
                    <Col span={6}>
                        <Button style={{fontWeight:'bolder'}} type="primary" htmlType="submit" size="large">Save & Invite</Button>
                    </Col>
                </Row>
                <Divider/>
                <Row gutter={15}>
                    <Col span={8} style={{textAlign:'center'}}>
                        <CircularImage/>
                    </Col>

                    <Col span={16}>
                        <Row gutter={15}>
                            <Col span={12}>
                                <Form.Item rules={[{required:true}]} name="userType">
                                    <SelectField selectType="normal" label="User Type" placeholder="Choose User Type" options={options.userType} value='' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={[{required:true,message:"Employee's number is required."}]} name="employeeNumber">
                                    <InputField inputtype="input" label="Employee Number" placeholder="Employee Number"  onChange={handleChange} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={15}>
                            <Col span={12}>
                                <Form.Item rules={[{required:true}]} name="firstName">
                                    <InputField inputtype="input" label="First Name" placeholder="First Name"/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={[{required:true}]} name="lastName">
                                    <InputField inputtype="input" label="Last Name" placeholder="Last Name"/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={15}>
                    <Col span={16}>
                        <Form.Item rules={ [{required:true},{type:"email",message:"Please enter a vaild email address."}] } name="businessEmail">
                            <InputField inputtype="input" label="Business Email" placeholder="Ex: doe@clarkegypt.com"/>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item rules={[{required:true}]} name="mobileNumber">
                            <InputField inputtype="input" label="Mobile Number" placeholder="+2 01x xxx xxxx"/>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={15} justify="space-around" align="middle">
                    <Col span={16}>
                        <Form.Item name="roleDescription" >
                            <InputField inputtype="textarea" label="Role Description" placeholder="Write the role description" autoSize={{minRows:4,maxRows:4}}/>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Row>
                            <Col span={24}>
                                <Form.Item rules={[{required:true}]} name="teamRole">
                                    <SelectField selectType="normal" label="Team Role" placeholder="Select Role" options={options.teamRole} value=''/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Form.Item rules={[{required:true}]} name="location">
                                    <SelectField selectType="normal" label="none" placeholder='Location' options={options.locations} value=''/>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row gutter={15}>
                    <Col span={24}>
                        <Form.Item rules={[{required:true}]} name="organizationTag">
                            <SelectField selectType="tags" label="Organization Tag" options={options.organizationTag} values=''/>
                        </Form.Item>
                    </Col>
                </Row>

                <Divider/>

                <Row gutter={15} justify="space-around" align="middle">
                    <Col span={6}>
                        <Form.Item name="approved" label="Approved" valuePropName="checked">
                            <Switch defaultChecked={false} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item name="inviteUser" label="Invite User" valuePropName="checked">
                            <Switch defaultChecked={false}/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <FormItem name="approvedBy">
                            <SelectField selectType="normal" label="none" placeholder="Approved By" options={options.teamRole} value=''/>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default AddMember;