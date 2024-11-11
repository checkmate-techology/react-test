import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { InputGroup } from "../../components/InputGroup/InputGroup";
import { Select } from "../../components/Select/Select";
import { addNotification } from "api/slices/notifications-slice";
import { useDispatch } from "react-redux";

export const Dashboard = () => {

  const dispatch = useDispatch();

  const click = () => {
    dispatch(addNotification({ some: 'Objec' }));
  }

  return (
    <div className="u-padding--large">
      <h1 className="title-1">Dashboard</h1>
      <p className="t-body u-margin-0">This is a sub-header</p>

      <div className="card card-with-border u-width-40 u-padding u-margin-top--large">
        <InputGroup title='First name'>
          <Input name='first_name' />
        </InputGroup>

        <InputGroup title='Select option'>
          <Select inputProps={{ onChange: () => {}}} value='option_1' useDefault>
            <Select.Item value='option_1'>Option 1</Select.Item>
            <Select.Item value='option_2'>Option 2</Select.Item>
          </Select>
        </InputGroup>

        <Button type="secondary">Secondary Button</Button>
        <Button className='u-margin-top' onClick={click}>Primary button</Button>
      </div>
    </div>
  )
}