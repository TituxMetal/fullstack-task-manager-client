import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button, Container, Form } from '~/components'
import { useCurrentTask, useSaveTask } from '~/hooks'

const formSchema = yup.object().shape({
  description: yup.string().min(4).trim().required().label('Description'),
  completed: yup.boolean()
})
const defaultValues = {
  description: '',
  completed: false
}

const TaskForm = () => {
  const { currentTask, resetCurrent } = useCurrentTask()
  const saveTaskMutation = useSaveTask()
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
    reset(currentTask || defaultValues)
  }, [currentTask, isSubmitSuccessful])

  const onSubmitHandler = data => saveTaskMutation.mutate(data, { onSettled: () => resetCurrent() })

  return (
    <Container $bordered>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        {isValid ? <Button.Add type='submit' /> : <Button.Block disabled={!isValid} />}
        {currentTask && <Button.Block type='button' onClick={resetCurrent} />}
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
