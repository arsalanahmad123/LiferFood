import React, { useEffect, useState, memo } from 'react'
import Wrapper from '../Components/Wrapper'
import HeaderSection from '../Components/HeaderSection'
import {
    FaArrowLeft,
    FaTimes,
    FaCloudUploadAlt,
    FaChevronCircleDown,
} from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { getCategories, getVariants } from '../Services/Restaurant'
import toast from 'react-hot-toast'
import resturantApi from '../Services/restaurantapi'
import Spin from '../Components/Spin'

const AddMenu = () => {
    const [images, setImages] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [categories, setCategories] = useState()
    const [variants, setVariants] = useState()
    const [selectedVariants, setSelectedVariants] = useState([])
    const [isVisible, setIsVisible] = useState({})
    const [finalVariant, setFinalVariant] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [create, setCreating] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const toggleVisibility = (variantId) => {
        setIsVisible((prevState) => ({
            ...prevState,
            [variantId]: !prevState[variantId],
        }))
    }

    const dummyImage = [
        'https://picsum.photos/200',
        'https://picsum.photos/200',
    ]

    const handleImageChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()

            reader.onloadend = () => {
                setImages((prevImages) => [...prevImages, reader.result])
            }

            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index))
    }

    const createProduct = async (e) => {
        e.preventDefault()
        if (selectedCategory == null) {
            toast.error('Select category')
            return
        }
        if (selectedVariants.length < 1) {
            toast.error('Add at least one variant')
            return
        }

        if (name === '') {
            toast.error("Product name can't be empty")
            return
        }
        if (description === '') {
            toast.error("Product description can't be empty")
            return
        }
        try {
            setCreating(!create)

            const response = await resturantApi.post('/products', {
                category_id: selectedCategory,
                name,
                description,
                is_available: true,
                product_variants: finalVariant,
            })

            if (response.data.success === true) {
                toast.success(response.data.message)
                setCreating(!create)
                navigate('/menu')
            }
        } catch (error) {
            setCreating(!create)
            toast.error(error.response.data.message)
        }
    }
    const addProductVariant = (variant) => {
        const isVariantExist = selectedVariants.find((v) => v.id === variant.id)

        if (!isVariantExist) {
            const price = document.getElementById(`price-${variant.id}`).value
            const is_discount = document.getElementById(
                `isDiscount-${variant.id}`,
            ).checked

            const discount_price = document.getElementById(
                `discount-${variant.id}`,
            ).value
            setSelectedVariants((prevVariants) => [
                ...prevVariants,
                {
                    variant_id: variant.id,
                    name: variant.name,
                    price: price,
                    is_discount: is_discount,
                    discount: discount_price,
                },
            ])
            setFinalVariant((prevVariants) => [
                ...prevVariants,
                {
                    variant_id: variant.id,
                    price: price,
                    is_discount: is_discount,
                    discount: discount_price,
                },
            ])
        }

        // Close the visibility of the variant
        setIsVisible((prevState) => ({
            ...prevState,
            [variant.id]: false,
        }))
    }

    const handleRemoveVariant = (variantID) => {
        setSelectedVariants((prevVariants) =>
            prevVariants.filter((variant) => variant.id !== variantID),
        )
    }

    useEffect(() => {
        setLoading(true)
        const fetchCategories = async () => {
            const responsecategories = await getCategories()
            setCategories(responsecategories.data)
        }
        const fetchVariants = async () => {
            const responsevariants = await getVariants()
            setVariants(responsevariants.data)
        }

        fetchVariants()
        fetchCategories()
        setLoading(false)
    }, [])

    return (
        <Wrapper>
            <HeaderSection
                heading='Menu Control Panel'
                para='Simplified Menu Management'
            />
            <form
                onSubmit={createProduct}
                className='grid grid-cols-12  gap-x-5 md:mx-20 mt-10 mx-4 gap-y-5'
            >
                <div className='md:col-span-6 col-span-12 flex flex-col justify-start items-start gap-y-5'>
                    <div className='flex flex-row text-gray-700 gap-x-5 justify-center items-center font-medium'>
                        <FaArrowLeft
                            size={22}
                            onClick={() => navigate(-1)}
                            className='cursor-pointer'
                        />
                        <h3 className='text-2xl '>Create Menu Item</h3>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-y-5 w-full'>
                        <div className='bg-white rounded-lg p-5 flex flex-col gap-y-5 w-full'>
                            <div className='flex flex-col justify-start items-start'>
                                <label
                                    htmlFor='productName'
                                    className='mb-1 font-semibold text-lg'
                                >
                                    Product Name
                                </label>
                                <input
                                    type='text'
                                    name='productName'
                                    id='productName'
                                    value={name}
                                    className='form-input rounded-md w-full'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col justify-start items-start'>
                                <label
                                    htmlFor='productDescription'
                                    className='mb-1 font-semibold text-lg'
                                >
                                    Product Description
                                </label>
                                <textarea
                                    name='productDescription'
                                    id='productDescription'
                                    value={description}
                                    className='form-textarea rounded-md w-full'
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            </div>
                            <label
                                htmlFor='images'
                                className='font-semibold text-lg'
                            >
                                Images
                            </label>
                            <div className='border-2 border-dashed p-2'>
                                <label
                                    htmlFor='productImages'
                                    className='cursor-pointer flex flex-col justify-center items-center gap-y-1 opacity-60 '
                                >
                                    <FaCloudUploadAlt size={25} />
                                    <h4>Upload Images</h4>
                                    <span className='text-sm text-gray-500'>
                                        Select one or more images
                                    </span>
                                    <input
                                        type='file'
                                        accept='image/*'
                                        className='hidden'
                                        id='productImages'
                                        multiple
                                        onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                            {images && (
                                <div className='flex flex-row justify-start items-center gap-x-3'>
                                    {images?.map((img, index) => (
                                        <div
                                            className='w-24 h-24 border-2 border-dashed relative'
                                            key={index}
                                        >
                                            <img
                                                src={img}
                                                alt='Product Image'
                                                className='w-full h-full object-cover'
                                            />
                                            <FaTimes
                                                className='absolute top-0 right-0 cursor-pointer'
                                                size={20}
                                                onClick={() =>
                                                    handleRemoveImage(index)
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <label
                                htmlFor='Product Category'
                                className='mb-1 font-semibold text-lg'
                            >
                                Select Category
                            </label>
                            <div className='flex flex-row flex-wrap gap-y-2 justify-start items-center gap-x-3 font-semibold'>
                                {loading ? (
                                    <Spin />
                                ) : (
                                    categories?.map((category, index) => (
                                        <label
                                            htmlFor={`category-${category.id}`}
                                            className={`p-2 rounded-full border text-xs md:text-sm ${
                                                selectedCategory === category.id
                                                    ? 'bg-textActive text-white'
                                                    : 'text-gray-600 bg-white'
                                            } cursor-pointer`}
                                            key={index}
                                        >
                                            <input
                                                type='radio'
                                                id={`category-${category.id}`}
                                                name='category'
                                                value={category.name}
                                                className='mr-1 hidden'
                                                onChange={() =>
                                                    setSelectedCategory(
                                                        category.id,
                                                    )
                                                }
                                            />
                                            {category.name}
                                        </label>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:col-span-6 col-span-12  md:mt-14 gap-y-5'>
                    <div className='bg-white p-5 flex flex-col rounded-lg'>
                        <label
                            htmlFor='Variants'
                            className='mb-1 font-semibold text-lg'
                        >
                            Variants
                        </label>
                        {selectedVariants?.length > 0 && (
                            <div className='flex flex-row justify-between items-center'>
                                {selectedVariants?.map((variant, index) => (
                                    <span
                                        key={index}
                                        className='text-gray-600 bg-white rounded-full text-sm px-4 py-1 relative border'
                                    >
                                        {variant.name ||
                                            variants.map(
                                                (v) =>
                                                    v.id ===
                                                        variant.variant_id &&
                                                    v.name,
                                            )}
                                        <FaTimes
                                            className='absolute -top-1 -right-1 cursor-pointer text-textActive'
                                            onClick={() =>
                                                handleRemoveVariant(variant.id)
                                            }
                                        />
                                    </span>
                                ))}
                            </div>
                        )}
                        {loading ? (
                            <Spin />
                        ) : (
                            <div className='flex flex-col  mb-2 gap-y-3 mt-5'>
                                {variants?.map((variant, index) => (
                                    <div
                                        className='flex flex-col bg-textActive p-2 rounded-md'
                                        key={variant.id}
                                    >
                                        <div className='flex flex-row justify-between items-center mb-2 cursor-pointer'>
                                            <span className='font-semibold text-[14px] text-white'>
                                                {variant.name}
                                            </span>
                                            <FaChevronCircleDown
                                                size={20}
                                                className='text-white'
                                                onClick={() =>
                                                    toggleVisibility(variant.id)
                                                }
                                            />
                                        </div>
                                        {isVisible[variant.id] && (
                                            <div className='flex flex-col  justify-center items-start flex-wrap  gap-y-2 text-gray-800'>
                                                <input
                                                    type='number'
                                                    id={`price-${variant.id}`}
                                                    className='px-3 py-1 rounded-md w-3/6 md:w-full text-gray-800'
                                                    placeholder='Price '
                                                />

                                                <label htmlFor='isDiscount'>
                                                    <input
                                                        type='checkbox'
                                                        id={`isDiscount-${variant.id}`}
                                                        className='mr-1 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none'
                                                    />
                                                    Is Discount
                                                </label>
                                                <input
                                                    type='number'
                                                    id={`discount-${variant.id}`}
                                                    className='px-3 py-1 rounded-md w-3/6 md:w-full text-gray-800'
                                                    placeholder='Discount'
                                                />

                                                <button
                                                    className='text-textActive bg-white rounded-md w-fit px-5 py-1 ml-auto font-semibold'
                                                    type='button'
                                                    onClick={() =>
                                                        addProductVariant(
                                                            variant,
                                                        )
                                                    }
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='flex justify-between items-center p-4 bg-white rounded-md'>
                        <button
                            type='button'
                            className='bg-textActive text-white rounded-md px-2 py-1'
                        >
                            New Category
                        </button>
                        <button
                            type='button'
                            className='bg-textActive text-white rounded-md px-2 py-1'
                        >
                            New Variant
                        </button>
                    </div>
                </div>
                <button
                    type='submit'
                    className='bg-textActive text-white rounded-md px-4 py-2 col-span-12 md:col-span-3 font-semibold w-full md:w-auto'
                >
                    {create ? 'Creating' : 'Add'}
                </button>
            </form>
        </Wrapper>
    )
}

export default memo(AddMenu)
