import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { InputGroup } from "../../components/InputGroup/InputGroup";
import { Select } from "../../components/Select/Select";
import { Textarea } from "components/Textarea/Textarea";
import { useForm } from "react-hook-form";

export const Dashboard = () => {

  const { register, handleSubmit, watch } = useForm();

  return (
    <div className="u-padding--large">
      <h1 className="title-1">Dashboard</h1>
      <p className="t-body u-margin-0">This is a sub-header</p>

      <form className="card card-with-border u-width-40 u-padding u-margin-top--large" onSubmit={() => { /** TODO */}}>
        <InputGroup title='Input Example'>
          <Input name='input_example' register={register} placeholder='Enter value' />
        </InputGroup>

        <InputGroup title='Select example'>
          <Select name='select_example' register={register} value={watch('select_example')} useDefault>
            <Select.Item value='option_1'>Option 1</Select.Item>
            <Select.Item value='option_2'>Option 2</Select.Item>
          </Select>
        </InputGroup>

        <InputGroup title='Textarea example'>
          <Textarea name='textarea_example' register={register} inputProps={{ rows: 5 }} />
        </InputGroup>

        <div className='card card-with-border u-padding background-secondary t-body u-margin-bottom'>
          Some card with secondary color
        </div>

        <Button type="secondary" onClick={() => {}}>Secondary Button</Button>
        <Button className='u-margin-top' submit>Primary button</Button>
      </form>
    </div>
  )
}