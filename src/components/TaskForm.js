import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button, Container, Form } from '~/components'
import { useCurrentTask } from '~/hooks'

const formSchema = yup.object().shape({
  description: yup.string().min(4).trim().required().label('Description'),
  completed: yup.boolean(),
  id: yup.string()
})
const defaultValues = {
  description: '',
  completed: false,
  id: ''
}

const TaskForm = () => {
  const { current, setCurrent } = useCurrentTask()
  const {
    handleSubmit,
    register,
    reset,
    setFocus,
    formState: { errors, isDirty, isValid, isSubmitSuccessful }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(formSchema)
  })

  useEffect(() => {
    setFocus('description')
  }, [current])

  useEffect(() => {
    reset(current || defaultValues)
  }, [current, isSubmitSuccessful])

  const onSubmitHandler = data => {
    console.log(current ? `Edit query${data.id}` : 'Add query', data)
    setCurrent(null)
  }

  return (
    <Container $bordered>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        {isValid ? <Button.Add type='submit' /> : <Button.Block disabled={!isValid} />}
        {current && <Button.Block type='button' onClick={() => setCurrent(null)} />}
        <Form.Input
          $error={isDirty && errors?.description}
          name='description'
          type='text'
          placeholder='Add a new task...'
          {...register('description')}
        />
        {errors.description && <Form.Message $error>{errors?.description?.message}</Form.Message>}
      </Form>
    </Container>
  )
}

export default TaskForm
