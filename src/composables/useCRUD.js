import { isNullOrWhitespace, isArray } from '@/utils'

const ACTIONS = {
  view: '查看',
  edit: '编辑',
  add: '新增',
}

export default function ({ name, initForm = {}, doCreate, doDelete, doUpdate, doSearch, refresh }) {
  const modalVisible = ref(false)
  const modalAction = ref('')
  const modalTitle = computed(() => ACTIONS[modalAction.value] + name)
  const modalLoading = ref(false)
  const modalFormRef = ref(null)
  const modalForm = ref({ ...initForm })

  /** 新增 */
  function handleAdd(params = {}) {
    modalAction.value = 'add'
    modalVisible.value = true
    modalForm.value = { ...params, ...initForm }
  }

  /** 修改 */
  async function handleEdit(row) {
    modalAction.value = 'edit'
    modalVisible.value = true
    const result = await doSearch({ id: row.movieId })
    modalForm.value = { ...result?.data }
  }

  /** 查看 */
  async function handleView(row) {
    modalAction.value = 'view'
    modalVisible.value = true
    const data = await doSearch({ id: row.movieId })
    modalForm.value = { ...data?.data }
  }

  /** 保存 */
  function handleSave() {
    if (!['edit', 'add'].includes(modalAction.value)) {
      modalVisible.value = false
      return
    }
    modalFormRef.value?.validate(async (err) => {
      if (err) return
      const actions = {
        add: {
          api: () => doCreate(modalForm.value),
          cb: () => $message.success('新增成功'),
        },
        edit: {
          api: () => doUpdate(modalForm.value),
          cb: () => $message.success('编辑成功'),
        },
      }
      const action = actions[modalAction.value]

      try {
        modalLoading.value = true
        const data = await action.api()
        action.cb()
        modalLoading.value = modalVisible.value = false
        data && refresh(data)
      } catch (error) {
        modalLoading.value = false
      }
    })
  }

  /** 删除 */
  function handleDelete(idParam, confirmOptions) {
    if (isNullOrWhitespace(idParam)) return
    $dialog.confirm({
      content: '确定删除？',
      async confirm() {
        try {
          modalLoading.value = true
          let data = {}
          if (isArray(idParam)) {
            data = await doDelete({ ids: idParam })
          } else {
            data = await doDelete({ id: idParam })
          }
          $message.success('删除成功')
          modalLoading.value = false
          refresh(data)
        } catch (error) {
          modalLoading.value = false
        }
      },
      ...confirmOptions,
    })
  }

  return {
    modalVisible,
    modalAction,
    modalTitle,
    modalLoading,
    handleAdd,
    handleDelete,
    handleEdit,
    handleView,
    handleSave,
    modalForm,
    modalFormRef,
  }
}
