<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-table :data="props.row.product" style="width: 100%">
          <el-table-column prop="id" label="id" width="80"></el-table-column>
          <el-table-column
            prop="goods_sn"
            label="商品SKU"
            width="150"
          ></el-table-column>
          <el-table-column prop="goods_name" label="快递单上的简称" width="220">
            <template slot-scope="p">
              {{ p.row.goods_name ? p.row.goods_name : '暂无' }}
            </template>
          </el-table-column>
          <el-table-column prop="value" label="型号/规格" width="150">
            <template slot-scope="p">
              {{ p.row.value ? p.row.value : '暂无' }}
            </template>
          </el-table-column>
          <el-table-column prop="cost" label="成本（元）" width="110">
          </el-table-column>
          <el-table-column
            prop="retail_price"
            label="零售（元）"
            width="110"
          ></el-table-column>
          <el-table-column
            prop="goods_weight"
            label="重量（KG）"
            width="110"
          ></el-table-column>
          <el-table-column
            prop="goods_number"
            label="库存"
            width="100"
          ></el-table-column>
          <el-table-column prop="sku" label="操作" width="130">
            <template slot-scope="p">
              <el-button type="primary">修改{{ p.row.cid }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column label="ID" prop="id" width="80"> </el-table-column>
    <el-table-column label="商品图片" width="100">
      <template slot-scope="props">
        <img :src="props.row.list_pic_url" />
      </template>
    </el-table-column>
    <el-table-column label="商品名称" prop="name"> </el-table-column>
    <el-table-column label="排序" prop="sort_order" sortable width="80">
      <template slot-scope="props">
        <el-input
          @change="order(props.row.id, $event)"
          v-model="props.row.sort_order"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column label="销量" sortable prop="sell_volume" width="100">
    </el-table-column>
    <el-table-column label="库存" sortable prop="goods_number" width="100">
    </el-table-column>
    <el-table-column label="首页显示" width="100">
      <template slot-scope="props">
        <el-switch
          @change="show(props.row.id, 'is_index', $event)"
          v-model="props.row.is_index"
        >
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column label="上架" width="100">
      <template slot-scope="props">
        <el-switch
          @change="show(props.row.id, 'is_on_sale', $event)"
          v-model="props.row.is_on_sale"
        >
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180">
      <template slot-scope="props">
        <el-button>编辑</el-button>
        <el-button @click="del(props.row.id)" type="danger" plain
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'PList',
  data() {
    return {
      orderVal: ''
    }
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    order(id, $event) {
      const order = $event.replace(/^\.+|[^\d.]/g, '')
      this.$store.dispatch('index/setOrder', { id, order })
    },
    show(id, type, $event) {
      this.$store
        .dispatch('index/setGoodsStatus', { id, type, status: $event })
        .then((res) => {
          console.log(res)
          console.log(id, type, $event)
        })
    },
    del(id) {
      this.$store.dispatch('index/delGoods', { id }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
