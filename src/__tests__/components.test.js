import React from 'react'
import { mount, shallow, render } from 'enzyme'
import { Home } from '../pages/Home'
import { Hero } from '../components/Hero'
import { Redeem } from '../pages/Redeem'
import ProductsHeader from '../components/products/productsHeader'
import { ProductSorter } from '../components/products/ProductSorter'
import ProductItem from '../components/products/ProductItem'

describe('Home Page', () => {
  it('should render Home Page correctly', () => {
    const component = shallow(<Home />)
    expect(component).toMatchSnapshot()
  })
})

describe('Redeem Page', () => {
  it('should render the Redeem page correctly', () => {
    const component = shallow(<Redeem />)
    expect(component).toMatchSnapshot()
  })
})

describe('Has className', () => {
  it('should render the product sorter component with class of c-btn--sorters', () => {
    const component = mount(<ProductSorter />)
    expect(component.find('.c-btn').hasClass('c-btn--sorters')).toEqual(true)
  })
})

describe('Has Props', () => {
  it('should render Hero correctly with given title', () => {
    const title = 'Hero'
    const component = shallow(<Hero title={title} />)
    expect(component).toMatchSnapshot()
  })

  it('checks the type of value', () => {
    const props = {
      cost: '1000',
    }
    const component = mount(<ProductItem {...props} />)
    expect(typeof component.prop('cost')).toBe('string')
  })
})
