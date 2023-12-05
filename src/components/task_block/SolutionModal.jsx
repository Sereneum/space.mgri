import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { CSSTransition } from 'react-transition-group';
import {
  CloudArrowUp, FilePlus, LinkSimple, Paperclip, Plus, X,
} from '@phosphor-icons/react';
import { epoch_uploadFile } from '../../http/epochServer';

const SolutionModal = ({
  isModal, setModal, loadingTaskData, parameters,
}) => {
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

  const onDrop = (acceptedFiles) => {
    uploading(acceptedFiles);
  };

  /* Отправка файла */
  const uploading = (newFiles) => {
    const formData = new FormData();
    for (const file of newFiles) { formData.append('newFiles', file); }
    for (const key in parameters) { formData.append(key, parameters[key]); }

    epoch_uploadFile(formData)
      .then((r) => {
        loadingTaskData();
        setModal(false);
      });
  };

  /* Отправка ссылки */
  const uploadingLink = () => {
    if (!(linkUrl.length || linkName.length)) return;
    const formData = new FormData();
    formData.append('link', linkUrl);
    formData.append('linkName', linkName);
    for (const key in parameters) { formData.append(key, parameters[key]); }

    epoch_uploadFile(formData)
      .then((r) => {
        loadingTaskData();
        setModal(false);
        setLinkName('');
        setLinkUrl('');
      });
  };

  return (
        <div className="modal_wrapper">
            {/* Анимация фона */}
            <CSSTransition in={isModal} classNames={'modal_bg_anim'} timeout={1000} mountOnEnter>
                <div onClick={setModal} className="modal_bg"></div>
            </CSSTransition>

            {/* Анимация дропзоны */}
            <CSSTransition in={isModal} timeout={1000} classNames={'modal_anim'} mountOnEnter>

                <div className="modal">
                    {/* TITLE */}
                    <div className="title_container">
                        <Paperclip weight="bold" className="icon_mid" size={'28px'}/>
                        <h1 className="modal_title_text">Прикрепить решение</h1>
                        <X onClick={setModal} weight="bold" className="icon_mid pointer" size={'28px'}/>
                    </div>

                    {/* BLOCK */}
                    <div className="element_container">

                        {/* TITLE DROPZONE */}
                        <div className="title_container">
                            <FilePlus weight="bold" className="icon_mid"/>
                            <h3>Файл</h3>
                        </div>

                        {/* DROPZONE */} {/* + для мобилок переделать */}
                        <Dropzone onDrop={onDrop}>
                            {({ getRootProps, getInputProps, onDropAccepted }) => (
                                <div {...getRootProps()} className="attach_cover desktop_only select-zoom">
                                    <input {...getInputProps()} />
                                    <div className="attach_container">
                                        <CloudArrowUp weight="bold" className="icon_big" size={'40px'}/>
                                        <p>Выберите файл с устройства или перетащите его в это окно</p>
                                    </div>
                                </div>
                            )}
                        </Dropzone>

                        {/* DROPZONE */} {/* + для мобилок переделать */}
                        <Dropzone onDrop={onDrop}>
                            {({ getRootProps, getInputProps, onDropAccepted }) => (
                                <div {...getRootProps()} className="content_cover select-zoom tablet">
                                    <input {...getInputProps()} />
                                    <div className="content_elem_row">
                                        <CloudArrowUp weight="bold" className="icon_mid" />
                                        <p>Загрузить с устройства</p>
                                        <Plus weight="bold" className="icon_mid" />
                                    </div>
                                </div>
                            )}
                        </Dropzone>

                    </div>

                    {/* LINK BLOCK */}
                    <div className="element_container">

                        {/* LINK BUTTON */}
                        <div className="title_container">
                            <LinkSimple weight="bold" className="icon_mid"/>
                            <h3>Ссылка</h3>
                        </div>

                        {/* LINK INPUT: NAME-URL */}
                        <div className="content_cover">
                            {/* LINK NAME */}
                            <div className="content_elem_row">
                                <input
                                    value={linkName}
                                    onChange={(e) => setLinkName(e.target.value)}
                                    className="input"
                                    placeholder='Наименование URL-ссылки'
                                />
                            </div>

                            <div className="breaker"></div>

                            {/* LINK URL */}
                            <div className="content_elem_row">
                                <input
                                    value={linkUrl}
                                    onChange={(e) => setLinkUrl(e.target.value)}
                                    className="input"
                                    placeholder='URL-ссылка'
                                />
                            </div>
                        </div>
                        {/* LINK ADD */}
                        <div onClick={uploadingLink} className="button_main">
                            <h4 className="text_button_main">Добавить</h4>
                        </div>
                    </div>

                </div>

            </CSSTransition>
        </div>
  );
};

export default SolutionModal;
